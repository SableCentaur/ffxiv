Options.Triggers.push({
  zoneId: 637, // Set this to the zone ID specified in the `01` network log line
  timelineFile: 'zurvan.txt',
  triggers: [
                {
                    id: 'Zurvan Wave Cannon',
                    type: 'StartsUsing',
					netRegex: { source: 'Zurvan', id: '1E3D', capture: false },
					response: Responses.awayFromFront('alert'),
                },
			],
  timelineTriggers: [
                {
                    id: 'Zurvan Metal Cutter',
                    regex: /Metal Cutter/,
					beforeSeconds: 4,
					response: Responses.tankCleave(),
                },
            ],
});
