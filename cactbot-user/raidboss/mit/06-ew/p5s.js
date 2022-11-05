Options.Triggers.push(
	{
		zoneRegex: /(^Abyssos\: The Fifth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'HOLD BUFFS': [
					230,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						22,
						116,
						225,
						353,
						443,
						575,
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
