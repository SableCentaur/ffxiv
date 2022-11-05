Options.Triggers.push(
	{
		zoneRegex: /(^Abyssos\: The Fifth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					1074,
					4215,
				],
				'HOLD BUFFS': [
					4165,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						// p1 - haurchefant dies
						15,
						102,
						// p2 - thordan v1.0
						611,
						706,
						// p3 - nidstinien
						1052,
						// p4 - eyes
						1518.6,
						// p4.5 - save haurchefant
						2026,
						// p5 - thordan v2.0
						3074.2,
						// p6 - bad dragons
						3535,
						3623,
						// p7 - thordan v3.0 will you fucking die already
						4064,
						4172.1,
					],
					'Sable Auto': [
						4048.4,
						4126.9,
					],
				}));
				if (data.job == 'NIN') {
					mitList.push(mitMapToTimeline({
						'Mudra': [
							// p1 - haurchefant dies
							56, // suiton
							// p2 - thordan v1.0
							605, // suiton
							672.5, // huton
							692.5, // suiton
							// p3 - nidstinien
							1002.3, // suiton
							// p4 - eyes
							1506.1, // suiton
							// p5 - thordan v2.0
							3051.4, // suiton
							3100.8, // huton
							3120.8, // suiton
							3507, // suiton
							// p6 - bad dragons
							3832, // huton
							// p7 - thordan v3.0 will you fucking die already	
							4005, // huton
							4025, // suiton
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
			}*/
			if (data.job == 'DNC' || data.job == 'MCH' || data.job == 'BRD') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every ranged dps
					'Tactician': [
					70,
					600,
					1002,
					1535,
					2036,
					3154,
					],
				}));
				/*if (data.job == 'DNC') {
					mitList.push(mitMapToTimeline({
						'Curing Waltz': [
							10,
						],
						'Improvisation': [
							20,
						],
					}));
				}*/
			}

			return mitList;
		},
	},
);