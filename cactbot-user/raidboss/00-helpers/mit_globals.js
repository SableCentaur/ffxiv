const buffsToTime = {
    'Addle': 10,
    'Manaward': 0,
    'Radiant Aegis': 0,
    'Magick Barrier': 10,
    'Magic Hammer': 10,
    'Troubadour': 15,
    'Tactician': 15,
    'Shield Samba': 15,
    'Improvisation': 15,
    'Curing Waltz': 0,
    'Nature\'s Minne': 15,
	'Dismantle': 10,
    'Feint': 10,
    'Feint 1': 10,
    'Feint 2': 10,
    'Mantra': 15,
	'Riddle of Earth': 10,
    'Third Eye': 4,
    'Arcane Crest': 5,
	
	'PB Lunar': 20,
	'PB Solar': 20,
	
    'Mudra': 6,
	'Suiton': 6,
	'Huton': 6,
	'Doton': 6,
	'Raiton': 6,
	'Hyosho': 6,
	'Kassatsu': 0,
	
	'Dance': 15,

    'Aquaveil': 8,
    'Asylum': 24,
    'Temperance': 20,
    'Liturgy': 20,

    'Soil': 15,
    'Expedient': 20,
    'Seraph': 22,
    'Whispering Dawn': 21,
    'Fey Illum': 20,
    'Protraction': 10,
    'Dissipation': 30,
	'Deploy': 0,

    'Exaltation': 8,
    'CU': 3,
    'Star': 20,
    'Macro': 15,
    'COpp': 15,
    'Neutral': 30,

    'Kera': 15,
    'Tauro': 15,
    'Holos': 20,
    'Panhaima': 15,
    'Haima': 15,
    'Pneuma': 0,
    'Physis': 10,

//role actions
    'Reprisal': 10,
    'Rampart': 20,

//self targetted
    'Sentinel': 15,
    'Vengeance': 15,
    'Thrill': 10,
    'Shadow Wall': 15,
    'Dark Mind': 10,
    'Nebula': 15,
    'Camouflage': 20,

//invuln
    'Hallowed Ground': 10,
    'Holmgang': 10,
    'Living Dead': 10,
    'Superbolide': 10,

//single target
    'Sheltron': 4,
    'Bloodwhetting': 4,
    'TBN': 6,
    'Oblation': 10,
    'Heart of Corundum': 4,
    'Aurora': 18,

//party wide
    'Divine Veil': 0,
    'Passage': 3,
    'Shake': 15,
    'Dark Missionary': 15,
    'Heart of Light': 15,
	
};

const mitEntryToTimeline = (origTime, mitStr) => {
    const buffTime = buffsToTime[mitStr];
    if (buffTime === undefined)
        return `${origTime} "👋 ${mitStr}" duration 5`;

    const time = Math.max(origTime - buffTime, 0);
    const duration = buffTime;

    return `${time} "👋 ${mitStr}" duration ${duration}`;
};

window.mitMapToTimeline = (mitMap) => {
    const timeline = [];
    for (const [a, b] of Object.entries(mitMap)) {
		if (parseFloat(a) == a && typeof b != 'object') {// timestamp, mit
			timeline.push(mitEntryToTimeline(a, b));
		} else if (parseFloat(a) == a) {// timestamp, [mit1, mi2]
			for (const mitStr of b)
				timeline.push(mitEntryToTimeline(a, mitStr));
		} else { // mit, [timestamp1, timestamp2]
			for (const timestamp of b) {
				timeline.push(mitEntryToTimeline(timestamp, a));
			}
		} 
    }
    return timeline;
};

window.mitTimeToTimeline = (mitMap) => {
    const timeline = [];
    for (const [timestamp, mit] of Object.entries(mitMap)) {
		if (typeof mit === 'string') {
			console.log('CASE 1 ' + timestamp + ' ' + mit);
			timeline.push(mitEntryToTimeline(timestamp, mit));
		} else {
			console.log('CASE 3 ' + timestamp + ' ' + mit);
			for (const mitStr of mit)
				timeline.push(mitEntryToTimeline(timestamp, mitStr));
		}
    }
    return timeline;
};