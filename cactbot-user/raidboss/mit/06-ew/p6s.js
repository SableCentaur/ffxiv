Options.Triggers.push(
	{
		zoneRegex: /(^Abyssos\: The Sixth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					2,
					486,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						15,
						142,
						253,
						385,
						498,
						622,
					],
				}));
				if (data.job == 'SAM') {
					mitList.push(mitMapToTimeline({
						'Third Eye': [
							14.2,
							56.8,
							112.3,
							141.4,
							224.4,
							252.2,
							282.3,
							303,
							356.9,
							384.3,
							408.6,
							437.8,
							497.1,
							545.4,
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