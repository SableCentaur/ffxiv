Options.Triggers.push(
	{
		zoneId: ZoneId.TheOmegaProtocolUltimate,
/* 		overrideTimelineFile: true,
		timelineFile: 'the_omega_protocol.txt', */
/* 		timelineTriggers: [
			{
				id: '👋 Sable Avoid Tether',
				regex: /^Mustard Bomb/,
				beforeSeconds: 5,
				response: Responses.getOut(), // don't use both this and infotext
				infoText: {
					en: 'Get Out'
				},
			},
		], */
		timeline: (data) => {

			const mitList = [];
			
			mitList.push(
				`1422 "--enrage--"`,
			);
			
			mitList.push(mitMapToTimeline({
			// alerts that show for every dps
			'Self Heal': [
				//100,
			],
			}));
			
			mitList.push(mitMapToTimeline({
				5: 'Pot Window',
				//200: 'Pot Window',
				//440: 'Pot Window',
				550: 'Pot Window',
				510: 'LAST DEFAMATION',
				//791: 'Pot Window',
				930: 'Pot Window',
				//1160: 'Pot Window', // pick one of these 3 for last pot window, whichever has bunshin and isn't hard to execute
				1185: 'WAIT',
				1259: 'WAIT',
				1275: 'Pot Window',
				1315: 'Go Mid',
				1392: '30s Remain',
				//1377: 'Pot Window?',
			}));

			if (data.role == 'dps') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every dps
					'Self Heal': [
					],
				}));
				if (data.CanFeint()) {
					mitList.push(mitMapToTimeline({
						// alerts that show for every melee
						'Feint': [ 
						// P1 Beetle
							//14,
							89, // Covers first 2 stacks in panto
							//100, // Covers last 2 stacks
						// P2 M/F
							//212.5, // autos after TB
						// P3
							441.5, // hello world
							//550.5, // critical error
							571.5, // oversampled wave cannon
						// P4
							//627.5, // wave cannon 1
							//637, // wave cannon 2
							//647, // wave cannon 3
							//662, // blue screen
						// P5
							//727, // tank busters
							740.0, //Delta
							//808.5, // tank busters
							//822, //Sigma
							//897.5, // tank busters
							911, //Omega
							//833.3, //wave cannons
							//981, //tank busters
							//999, //blind faith
							
						// P6
							1176, //autos (also covers cosmo memory)	F1		F1
							//1200, // cosmo dive 1  F2
							//1211, // autos
							//1238, // wave cannon 1							F2
							//1253, // autos
							//1278, // wave cannon 2+stack  F1						F1
							//1287, // autos
							1313, // cosmo dive 2  F2
							//1323.5, // autos
							//1356, // cosmo meteor  F1							F2
							
							
						],
						
						'Shade Shift': [
							312,
							444,
							770,
							1310,
							1220,
							1345,
						],
						
						'Melee LB3': [
							610,
							//1310,
							1320,
							1395,
						],
/* 						'Feint 1': [ // for planning out which melee should feint
							//90, // Covers first 2 stacks in panto
							100, // Covers last 2 stacks
						],
						'Feint 2': [ // for planning out which melee should feint
							90, // Covers first 2 stacks in panto
							//100, // Covers last 2 stacks
						], */
					}));
					
					if (data.job == 'NIN') {
						mitList.push(mitMapToTimeline({
						// mudras
							262.5: 'Suiton', // M & F
							432.5: 'Suiton', // Hello World
							716: 'Raiton', // Delta
							775: 'Bunshin', // Before Sigma
							791.5: 'Suiton', // Sigma
							810: 'SAVE NINKI', // Prep for Omega
							865: 'Bunshin', // Prep for Omega
							872: 'Huton', // Prep for Omega
							872: 'Kassatsu', // Prep for Omega
							885.5: 'Hyosho', // Omega
							920: 'SAVE NINKI', // Prep for post Omega
							961: 'Bunshin', // Post Omega
							968: 'Suiton', // Post Omega
							1160.5: 'Suiton', // P6
							1245: 'HOLD BUNSHIN',
							1335: 'HOLD BUNSHIN',
							1392: 'Bunshin',
							//20.5: 'Huton', 
							
	/* 					bunshin
							10:15 (must go into delta untargettable with 50 gauge)
							11:45 (must go into sigma untargettable with 50 gauge)
							13:15 (must go into omega untargettable with 50 gauge)
							14:45
 */						}));
					}
				}
			}

			return mitList;
		},
	},
);