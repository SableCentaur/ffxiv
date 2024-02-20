Options.Triggers.push(
	{
		zoneRegex: /(^Anabaseios\: The Twelfth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					2,
					375,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						11.5,
						179,
						267.5,
						380.5,
						623,
						
						1012.5,
						1109,
						1227,
						1333.5,
						1426,
					],
					'LIMIT BREAK': [
						//1,
					],
				}));
 				if (data.job == 'NIN') {
 					mitList.push(mitMapToTimeline({
					// mudras
						304.5: 'Huton',
						324.5: 'Suiton',
					}));
					mitList.push(mitMapToTimeline({
						'Shade Shift': [
							79,
							214,
							382,
							
							1021,
							1199,
							1404
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
						11, // opener raidwide
						//42, // para 1 add lasers
						//89, // para 2 tethers + towers + raidwide
						100, // raidwide + tank busters
						//146, // superchain 1 lasers + towers + spreads
						//179, // party in/out + raidwide
						225, // para 3 lasers
						//230, // para 3 lasers + raidwide
						//245, // tankbusters
						//267.5, // pre LC raidwide
						//305, // LC first half
						315, // LC second half
						//388, // SC protean + party in/out + raidwide
						451, // soft enrage raidwides
						
						1012.1, // opener raidwide
						//1041, // TB2 + UAV
						1108.6, //raidwide + shapes
						//1144, // shape hits + proteans + raidwide
						//1186, // caloric 1 + first stack
						//1219, // exaflares + meteors + spreads
						1241, // raidwide + pan
						//1297, // shapes 2
						//1333.5, // raidwide
						1362.5, // buster + caloric 2
						//1404, // exaflares + meteors + spreads
						//1426, // raidwide + UAV2
						1495, // raidwide x2
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