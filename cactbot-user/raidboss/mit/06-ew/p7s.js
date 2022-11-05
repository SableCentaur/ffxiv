Options.Triggers.push(
	{
		zoneRegex: /(^Abyssos\: The Seventh Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					120,
					500,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						13,
						103,
						224,
						364,
						461,
						607,
					],
				}));
				if (data.job == 'SAM') {
					mitList.push(mitMapToTimeline({
						'Third Eye': [
							13,
							43,
							80,
							103,
							122,
							182,
							224,
							287,
							307,
							363.5,
							407.5,
							422.5,
							437.5,
							452.5,
							529,
							562,
							607,
							628,
							643.1,
							656.3,
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