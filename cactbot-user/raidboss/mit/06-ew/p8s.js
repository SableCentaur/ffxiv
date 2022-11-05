Options.Triggers.push(
	{
		zoneRegex: /(^Abyssos\: The Eighth Circle \(Savage\)$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				'Pot': [
					462,
					1465,

					5410,
				],
			}));
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					'Feint': [
						222,
						316.5,
						402.2,
						533,

						// dog first
						1184,
						1329,
						1451,

						//part 2
						5016,
						5118,
						5220,
						5331,
						5464,
					],
				}));
				if (data.job == 'NIN') {
					mitList.push(mitMapToTimeline({
						'Mudra': [
							5140, // suiton
							5160, // suiton
							5370, // huton then raiton
							5409, //suiton
						],
						'Limit Break': [
							5375,
						],
					}));
				}
				if (data.job == 'SAM') {
					mitList.push(mitMapToTimeline({
						'Third Eye': [
							12.1,
							41.1,

							// snake first
							221.8,
							254.5,
							267.6,
							283.9,
							302.8,
							358.6,
							377.2,
							391.8,
							467.8,

							// dog first
							1170.3,
							1228,
							1241,
							1258,
							1329,
							1358,
							1377,
							1391.6,
							1421,
							1451,
							1546.4,
							1559.4,

							// part 2
							5016,
							5058.6,
							5076.4,
							5088.7,
							5118,
							5170.9,
							5189.5,
							5213.2,
							5262.9,
							5281.8,
							5301.9,
							5331,
							5424.5,
							5442.7,
							5464,
							5483.0,
						],
					}));
				}
			}
			if (data.CanAddle()) {
				mitList.push(mitMapToTimeline({
					// alerts that show for every caster
					'Addle': [
						12.2,
						// snake first
						222,
						316,
						406,
						516,
						// dog first
						1184,
						1328,
						1399,
						1481,
					],
				}));
/*				if (data.job == 'RDM') {
					mitList.push(mitMapToTimeline({
						'Magick Barrier': [
							15,
						],
					}));
				}*/
			}
			if (data.job == 'DNC' || data.job == 'MCH' || data.job == 'BRD') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every ranged dps
					'Tactician': [
						// snake first
						222,
						330,
						468,

						// dog first
						1197,
						1329,
						1451,

						//part 2
						5083,
						5172,
						5269,
						5454,
					],
				}));
/*				if (data.job == 'DNC') {
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