Options.Triggers.push(
	{
		zoneRegex: /(^Anabaseios\: The Ninth Circle \(Savage\)$)/,
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
						12.2,
						155,
						272,
						355,
						455,
					],
					'LIMIT BREAK': [
						//1,
					],
				}));
 				if (data.job == 'NIN') {
 					mitList.push(mitMapToTimeline({
					// mudras
						258.5: 'Suiton',
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
						12.5, // opener raidwide
						176, // pugilist raidwide
						272.5, // post LC raidwide
						426.5, // chimera 2 raidwide
						513.5, // mage 2 raidwide
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
						'Dance': [
							258,
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