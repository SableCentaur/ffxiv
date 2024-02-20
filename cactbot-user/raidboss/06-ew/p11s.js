Options.Triggers.push(
	{
		zoneRegex: /(^Anabaseios\: The Eleventh Circle \(Savage\)$)/,
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
						30,
						257,
						384,
						484,
						623
					], 
					'LIMIT BREAK': [
						//1,
					],
				}));
 				if (data.job == 'NIN') {
 					mitList.push(mitMapToTimeline({
					// mudras
						//1: 'Suiton',
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
						16, // opener raidwide
						100, // styx
						210, // styx
						370, // styx
						484, // eunomia
						562, // styx
						656, // eunomia
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