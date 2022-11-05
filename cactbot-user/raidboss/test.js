console.log('git raidboss user/raidboss/test.js file');

Options.Triggers.push(
	{
		zoneRegex: /(^The Royal Menagerie$)/,
		timeline: (data) => {

			const mitList = [];
			mitList.push(mitMapToTimeline({
				// alerts that show for every job
				'Raidboss File Injection Test': [
					15,
				],
			}));

			if (data.role == 'dps') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every dps
					'Self Heal': [
						15,
					],
				}));
			}
			if (data.role == 'healer') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every healer
					'Top everyone': [
						15,
					],
				}));
				if (data.job == 'AST') {
					mitList.push(mitMapToTimeline({
						'Earthly Star': [
							15,
						],
						'Macrocosmos': [
							15,
						],
					}));
				}
			}
			if (data.role == 'tank') {
				mitList.push(mitMapToTimeline({
					// alerts that show for every tank
					'Shield caster': [
						15,
					],
				}));
				if (data.job == 'PLD') {
					mitList.push(mitMapToTimeline({
						'Hallowed Ground': [
							15,
						],
						'30%': [
							20,
						],
					}));
				}
			}
			if (data.CanFeint()) {
				mitList.push(mitMapToTimeline({
					// alerts that show for every melee
					'Feint': [ // each integer in the list is a timestamp for when the mitigation needs to be active
						15,
						25
					],
				}));
				if (data.job == 'NIN') {
					mitList.push(mitMapToTimeline({
						'Mudra': [
							15,
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
			if (data.CanAddle()) {
				mitList.push(mitMapToTimeline({
					// alerts that show for every caster
					'Addle': [
						15,
					],
				}));
				if (data.job == 'BLM') {
					mitList.push(mitMapToTimeline({
						'Manaward': [
							15,
						],
					}));
				}
				if (data.job == 'SMN') {
					mitList.push(mitMapToTimeline({
						'Radiant Aegis': [
							15,
						],
					}));
				}
				if (data.job == 'RDM') {
					mitList.push(mitMapToTimeline({
						'Magick Barrier': [
							15,
						],
					}));
				}
				if (data.job == 'BLU') {
					mitList.push(mitMapToTimeline({
						'Magic Hammer': [
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
				if (data.job == 'BRD') {
					mitList.push(mitMapToTimeline({
						'Nature\'s Minne': [
							15,
						],
					}));
				}
			}

			console.log("Mit Timeline " + mitList);
			return mitList;
		},
	},

	{
		zoneRegex: /(^Middle La Noscea$)/,
		timeline: (data) => {
			const mitList = [];
			mitList.push(mitMapToTimeline({
				// alerts that show for every job
				'Raidboss File Injection Test': [15],
			}));
			return mitList;
		},
	}
);