Options.Triggers.push(
	{
		zoneRegex: /(^Dragonsong\'s Reprise \(Ultimate\)$)/,
		timelineTriggers: [
                {
                    id: '👋 P7 Sable Autos',
                    regex: /^Trinity 2/,
					beforeSeconds: 5,
                    response: Responses.getIn(),
                },
            ],
			
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
					// p1 - vault
						11, // raidwide holiest of holy
						//28.2, // heavensblaze, also covers buster
						//61, // raidwide holiest of holy
						104, // raidwide holiest of holy
						//122.5, // raidwide holiest of holy
						
					// p1.5 - haurchefant dies
						//536, //pure of heart
						
					// p2 - thordan v1.0
						//615, // raidwide quaga
						628, // buster heel
						//706, // raidwide ultimate end - with fast KT this isn't back for 2nd stack in nidd
						
					// p3 - nidstinien
						//1031, // stack eye of the tyrant during towers 1
						1052, // stack eye of the tyrant during towers 3
						//1084, // soul tether
						
					// p4 - eyes
						//1518.6, // hatebound, cast by both eyes
						//1556, // mirage dives 1
						//1561, //mirage dives 2
						1571, //steep in rage
						
					// p4.5 - save haurchefant
						//2036.5, //pure of heart
						
					// p5 - thordan v2.0
						//3061, // raidwide ancient quaga - IS NOT BACK IN TIME FOR SECOND QUAGA
						//3074.2, // buster, covers heel and mights
						3208.5, //raidwide quaga - this will not be back in time for akh afah 1
						//3225, //buster, covers heel and mights
						
					// p6 - bad dragons
						//3535, // great/dread wyrmsbreath (ice/fire/tank buster shit)
						//3554.5, //stacks akh afah 1
						//3568, // hallowed plume busters
						3598.5, //Wroth Flames akh morns
						//3623, // stack akh afah 2
						//3636, //hallowed plume busters
						//3660, //great/dread wyrmsbreath (ice/fire/tank buster shit)
						//3668.5, //cauterize
						
					// p7 - thordan v3.0 will you fucking die already
						//4048.5, // melee autos 1
						4064, //akh morn 1 FEINT 1
						//4073, //ranged autos 1
						//4093, // gigaflares 1 FEINT 2
						//4106, //healer autos 1
						//4127, //melee autos 2
						//4144, //akh morn 2
						//4153, //ranged autos 2
						4172, //gigaflares 2 FEINT 1
						//4186, //healer autos 2
						//4207, //melee autos 3
						//4224.5, //akh morn 3 FEINT 2
						//4234, //ranged autos 3
						
					],
				}));
 				if (data.job == 'NIN') {
 					mitList.push(mitMapToTimeline({
					// mudras
						// p1 - haurchefant dies
						56: 'Suiton',
						
						// p2 - thordan v1.0
						605: 'Suiton',
						672.5: 'Huton',
						692.5: 'Suiton',
						
						// p3 - nidstinien
						1002.3: 'Suiton',
						
						// p4 - eyes
						1506.1: 'Suiton',
						
						// p5 - thordan v2.0
						3051.4: 'Suiton',
						3100.8: 'Huton',
						3120.8: 'Suiton',
						3507: 'Suiton',
						
						// p6 - bad dragons
						3832: 'Huton',
						
						// p7 - thordan v3.0 will you fucking die already	
						4005: 'Huton',
						4025: 'Suiton', 
					}));
				} 
/* 				if (data.job == 'SAM') {
					mitList.push(mitMapToTimeline({
						'Third Eye': [
							15,
						],
					}));
				} */
			}
/* 			if (data.CanAddle()) {
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
					61,
					611,
					1003,
					1535,
					2040,
					3154,
					],
				})); */
				/*if (data.job == 'DNC') {
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

			console.log("Mit Timeline " + mitList);
			return mitList;
		},
	},
);