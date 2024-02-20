Options.Triggers.push(
	{
		zoneRegex: /(^Anabaseios\: The Tenth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					1,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						14.1,
						132,
						271,
						448,
						588,
					],
					'LIMIT BREAK': [
						//1,
					],
				}));
 				if (data.job == 'NIN') {
 					mitList.push(mitMapToTimeline({
					// mudras
						//56: 'Suiton',
					}));
				}
				if (data.job == 'SAM') {
					mitList.push(mitMapToTimeline({
						'Third Eye': [
							1,
						],
					}));
				}
			}
			if (data.CanAddle()) {
				mitList.push(mitMapToTimeline({
					// alerts that show for every caster
					'Addle': [
						1,
					],
				}));
				if (data.job == 'RDM') {
					mitList.push(mitMapToTimeline({
						'Magick Barrier': [
							1,
						],
					}));
				}
			}
			if (data.job == 'DNC' || data.job == 'MCH' || data.job == 'BRD') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every ranged dps
					'Tactician': [
						23.2, // opener raidwide + tbs
						147, // meltdown + bonds 1
						250, // ultima
						351, // something about wings and meltdown
						454, // harrowing hell
						// 462.3, // bonds
						544, // idk
						640, // enrage
					],
				}));
				if (data.job == 'DNC') {
					mitList.push(mitMapToTimeline({
						'Curing Waltz': [
							//1,
						],
						'Improvisation': [
							//1,
						],
					}));
				}
				if (data.job == 'MCH') {
					mitList.push(mitMapToTimeline({
						'Dismantle': [
							//1,
						],
					}));
				}
			}

			return mitList;
		},
	},
);