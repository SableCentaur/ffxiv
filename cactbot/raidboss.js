const buffsToTime = {
  'Manaward': 0,
  'Radiant Aegis': 0,
  'Magick Barrier': 10,
  'Addle': 10,
  'Improvisation': 15,
  'Curing Waltz': 0,
  'Shield Samba': 15,
  'Troubadour': 15,
  'Tactician': 15,
  'Nature\'s Minne': 15,
  'Feint': 10,
  'Mantra': 15,
  'Third Eye': 4,
  'Arcane Crest': 5,
  'Mudra': 6,
  
  'Exaltation': 8,
  'Collective Unconscious': 3,
  'Earthly Star': 20,
  'Macrocosmos': 15,
  'Celestial Opposition': 15,
  'Neutral Sect': 30,
  
  'Aquaveil': 8,
  'Asylum': 24,
  'Temperance': 20,
  'Liturgy': 20,
  
  'Kerachole': 15,
  'Taurochole': 15,
  'Holos': 20,
  'Panhaima': 15,
  'Haima': 15,
  'Pneuma': 0,
  'Physis': 10,
  
  'Sacred Soil': 15,
  'Expedient': 20,
  'Seraph': 22,
  'Whispering Dawn': 21,  
  'Fey Illumination': 20,
  'Protraction': 10,
  'Dissipation': 30,
  
  'Reprisal': 10,
  'Rampart': 20,
  '30%': 15,
  'Invuln': 10,
  'Sheltron': 4,
  'Divine Veil': 30,
  'Passage': 3,
  'Bloodwhetting': 4,
  'Shake': 15,
  'Thrill': 10,
  'TBN': 6,
  'Oblation': 10,
  'Dark Mind': 10,
  'Dark Missionary': 15,
  'Heart of Corundum': 4,
  'Aurora': 18,
  'Camouflage': 20,
  'Heart of Light': 15,
};

const mitEntryToTimeline = (origTime, mitStr) => {
  const buffTime = buffsToTime[mitStr];
  if (buffTime === undefined)
    return `${origTime} "👋 ${mitStr}"`;
  
  const time = Math.max(origTime - buffTime, 0);
  const duration = buffTime;
  
  return `${time} "👋 ${mitStr}" duration ${duration}`;
};

window.mitMapToTimeline = (mitMap) => {
  const timeline = [];
  for (const [mit, timestamps] of Object.entries(mitMap)) {
      for (const timestamp of timestamps)
        timeline.push(mitEntryToTimeline(timestamp, mit));
    }
  }
  return timeline;
};

Options.Triggers = [
	{
    zoneRegex: /(^The Royal Menagerie$)/,
    timeline: (data) => {

		const mitList = [];
		if (data.CanFeint()) {
			mitList.push(mitMapToTimeline({
				'Feint': [15], // each integer in the list is a timestamp for when the mitigation needs to be active
			}));
			if(data.job == 'NIN') {
			mitList.push(mitMapToTimeline({
				'Mudra': [15],
			}));
			}
			if(data.job == 'SAM') {
			mitList.push(mitMapToTimeline({
				'Third Eye': [15],
			}));
			}
		}
		if (data.CanAddle()) {
			mitList.push(mitMapToTimeline({
				'Addle': [15],
			}));
			if(data.job == 'BLM') {
			mitList.push(mitMapToTimeline({
				'Manaward': [15],
			}));
			}
			if(data.job == 'SMN') {
			mitList.push(mitMapToTimeline({
				'Radiant Aegis': [15],
			}));
			}
			if(data.job == 'RDM') {
			mitList.push(mitMapToTimeline({
				'Magick Barrier': [15],
			}));
			}
		}
		if (data.job == 'DNC' || data.job == 'MCH' || data.job == 'BRD') {
			mitList.push(mitMapToTimeline({
				'Tactician': [15],
			}));
			if(data.job == 'DNC') {
			mitList.push(mitMapToTimeline({
				'Improvisation': [20],
			}));
			}
			if(data.job == 'BRD') {
			mitList.push(mitMapToTimeline({
				'Nature\'s Minne': [15],
			}));
			}
		}
		
		//console.log("Mit Timeline " + mitList);
		return mitList;
    },
	},
];
