Options.Triggers.push(
	{
		zoneRegex: /(^Abyssos\: The Fifth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					2,
					385,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
					63.5,
					147,
					353,
/* 						22,
						116,
						225,
						353,
						443,
						575, */
					],
				}));
				if (data.job == 'NIN') {
					mitList.push(mitMapToTimeline({
						'Mudra': [
							267,
						],
					}));
				}
				if (data.job == 'SAM') {
					mitList.push(mitMapToTimeline({
						'Third Eye': [
							15,
							115.6,
							133.2,
							// 135.2, // can also use here
							159.6,
							215.5,
							285.6,
							10,
							353,
							378,
							436,
							456
						],
					}));
				}
			}
			/*if (data.CanAddle()) {
				mitList.push(mitMapToTimeline({
					// alerts that show for every caster
					'Addle': [
						15,
					],
				}));
				if (data.job == 'RDM') {
					mitList.push(mitMapToTimeline({
						'Magick Barrier': [
							15,
						],
					}));
				}
			}
			if (data.job == 'DNC' || data.job == 'MCH' || data.job == 'BRD') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every ranged dps
					'Tactician': [
						15,
					],
				}));
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
			}*/

			return mitList;
		},
	},
);
