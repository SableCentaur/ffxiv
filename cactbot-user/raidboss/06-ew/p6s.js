Options.Triggers.push(
	{
		zoneRegex: /(^Abyssos\: The Sixth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					2,
					360,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
					// first feint
/* 						14.5,
						112.5,
						224.5,
						336,
						438,
						545.5 */
					
					// second feint
						28,
						129,
						239.5,
						348,
						469.5,
						594,
						
						/* 142,
						253,
						385, //348?
						498,
						622, */
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