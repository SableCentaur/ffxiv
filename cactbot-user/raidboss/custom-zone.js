Options.Triggers.push({
	//zoneId: 1234, // Set this to the zone ID specified in the `01` network log line
	zoneRegex: /(^Mist$)/,
	timelineFile: 'custom-zone.txt',
	triggers: [],
	timeline: (data) => {

		const mitList = [];
		
		mitList.push(
			// timeline entries without alerts
			`10 "Test1"`,
			`20 "Test2"`
		);
		
		mitList.push(mitMapToTimeline({
			// alerts that show for every job
			'Stillness STOP EVERYTHING': [
				17,
			],
		}));

		if (data.role == 'dps') {
			mitList.push(mitMapToTimeline({
				// alerts that show for every dps
				'Self Heal': [
					15,
				],
			}));
		}
		if (data.role == 'healer') {
			mitList.push(mitMapToTimeline({
				// alerts that show for every healer
				'Top everyone': [
					15,
				],
			}));
			if (data.job == 'AST') {
				mitList.push(mitMapToTimeline({
					'Earthly Star': [
						27,
					],
					'Macrocosmos': [
						20,
					],
					
					25: ['Exaltation', 'CU', 'COpp', 'Neutral'],
				}));
			}
			if (data.job == 'WHM') {
				mitList.push(mitMapToTimeline({
					'Temperance': [
						15,
					],
					'Liturgy': [
						15,
					],
					
					25: ['Aquaveil', 'Asylum'],
				}));
			}
			if (data.job == 'SCH') {
				mitList.push(mitMapToTimeline({
					'Soil': [
						15,
					],
					'Expedient': [
						25,
					],
					'Deploy': [
						7,
					],
					
					25: ['Seraph', 'Whispering Dawn', 'Fey Illum', 'Protraction', 'Dissipation'],
				}));
			}
			if (data.job == 'SGE') {
				mitList.push(mitMapToTimeline({
					'Holos': [
						15,
					],
					'Panhaima': [
						25,
					],
					
					25: ['Pneuma', 'Physis', 'Kera', 'Tauro', 'Haima'],
				}));
			}
		}
		if (data.role == 'tank') {
			mitList.push(mitMapToTimeline({
				// alerts that show for every tank
				'Shield caster': [
					15,
				],
			}));
			if (data.job == 'PLD') {
				mitList.push(mitMapToTimeline({
					'Hallowed Ground': [
						15,
					],
					'Sentinel': [
						17,
					],
					25: ['Reprisal', 'Rampart', 'Divine Veil', 'Passage', 'Sheltron'],
				}));
			}
			if (data.job == 'WAR') {
				mitList.push(mitMapToTimeline({
					'Holmgang': [
						15,
					],
					'Vengeance': [
						17,
					],
					25: ['Reprisal', 'Rampart', 'Thrill', 'Bloodwhetting', 'Shake'],
				}));
			}
			if (data.job == 'DRK') {
				mitList.push(mitMapToTimeline({
					'Living Dead': [
						15,
					],
					'Shadow Wall': [
						17,
					],
					25: ['Reprisal', 'Rampart', 'Dark Missionary', 'TBN', 'Oblation', 'Dark Mind'],
				}));
			}
			if (data.job == 'GNB') {
				mitList.push(mitMapToTimeline({
					'Superbolide': [
						15,
					],
					'Nebula': [
						17,
					],
					25: ['Reprisal', 'Rampart', 'Camouflage', 'Heart of Corundum', 'Aurora', 'Heart of Light'],
				}));
			}
		}
		if (data.CanFeint()) {
			mitList.push(mitMapToTimeline({
				// alerts that show for every melee
				'Feint': [ // each integer in the list is a timestamp for when the mitigation needs to be active
					15,
				],
			}));
			if (data.job == 'NIN') {
				mitList.push(mitMapToTimeline({
					5: 'Kassatsu',
					8: 'Suiton',
					10: 'Huton',
					12: 'Mudra',
					
					'Shade Shift': [
						15,
					],
				}));
			}
			if (data.job == 'SAM') {
				mitList.push(mitMapToTimeline({
					'Third Eye': [
						15,
					],
				}));
			}
			if (data.job == 'MNK') {
				mitList.push(mitMapToTimeline({
					'Riddle of Earth': [
						15,
					],
					'PB Lunar': [
						27,
					],
					'PB Solar': [
						35,
					],
				}));
			}
		} 
		if (data.CanAddle()) {
			mitList.push(mitMapToTimeline({
				// alerts that show for every caster
				'Addle': [
					15,
				],
			}));
			if (data.job == 'BLM') {
				mitList.push(mitMapToTimeline({
					'Manaward': [
						15,
					],
				}));
			}
			if (data.job == 'SMN') {
				mitList.push(mitMapToTimeline({
					'Radiant Aegis': [
						15,
					],
				}));
			}
			if (data.job == 'RDM') {
				mitList.push(mitMapToTimeline({
					'Magick Barrier': [
						15,
					],
				}));
			}
			if (data.job == 'BLU') {
				mitList.push(mitMapToTimeline({
					'Magic Hammer': [
						15,
					],
				}));
			}
		}
		if (Util.isRangedDpsJob) {
			mitList.push(mitMapToTimeline({
				// alerts that show for every ranged dps
				'Troubadour': [
					15,
				],
			}));
			if (data.job == 'MCH') {
				mitList.push(mitMapToTimeline({
					'Dismantle': [
						15,
					],
				}));
			}
			if (data.job == 'BRD') {
				mitList.push(mitMapToTimeline({
					'Nature\'s Minne': [
						15,
					],
				}));
			}
			if (data.job == 'DNC') {
				mitList.push(mitMapToTimeline({
					'Curing Waltz': [
						10,
					],
					'Improvisation': [
						20,
					],
				}));
			}
		}

		console.log("Mit Timeline " + mitList);
		return mitList;
	},
});
