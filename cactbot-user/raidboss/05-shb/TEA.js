Options.Triggers.push(
	{
		zoneRegex: /(^The Epic of Alexander \(Ultimate\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					2,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						20,
					],
					'LIMIT BREAK': [
						//1,
					],
				}));
 				if (data.job == 'NIN') {
 					mitList.push(mitMapToTimeline({
					// mudras
						209.5: 'Huton',
						223.5: 'Doton',
						229.5: 'Suiton',
					}));
					mitList.push(mitMapToTimeline({
						'Shade Shift': [
						],
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
							325,
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