/*
Options.Triggers.push(
	{
		zoneRegex: /(^The Royal Menagerie$)/,
		timeline: (data) => {

			const mitList = [];
			
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					// alerts that show for every melee
					'Feint': [ // each integer in the list is a timestamp for when the mitigation needs to be active
						// 15,
					],
				}));
				if (data.job == 'NIN') {
					mitList.push(mitMapToTimeline({
						'Mudra': [
							// 15,
						],
					}));
				}
				if (data.job == 'SAM') {
						'Third Eye': [
					mitList.push(mitMapToTimeline({
							// 15,
						],
					}));
				}
			}
			return mitList;
		},
	},
);
*/