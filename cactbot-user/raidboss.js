console.log('git raidboss user file');
Options.Debug = true;
console.log('Language set to ' + Options.Language);
Options.SpokenAlertsEnabled = false;

const sablePlayerNicknames = {
    'Celessia Drachenhart': 'Celes',
    'Zargabath Galleon': 'Zarg',
    'Rhyme Thyme': 'Pogostick',
    'Loreilei Asterale': 'Lore',
    'Emberlyn Nightshade': 'Emmy',
    'K\'kiba Tia': 'Kiba',
    'Rein Beau': 'Leo',
};

const jobIDToEN = {
    1: "GLA",
    2: "PGL",
    3: "MRD",
    4: "LNC",
    5: "ARC",
    6: "CNJ",
    7: "THM",
    26: "ACN",
    29: "ROG",

    8: "CRP",
    9: "BSM",
    10: "ARM",
    11: "GSM",
    12: "LTW",
    13: "WVR",
    14: "ALC",
    15: "CUL",

    16: "MIN",
    17: "BTN",
    18: "FSH",

    19: "PLD",
    20: "MNK",
    21: "WAR",
    22: "DRG",
    23: "BRD",
    24: "WHM",
    25: "BLM",
    27: "SMN",
    28: "SCH",
    30: "NIN",
    31: "MCH",
    32: "DRK",
    33: "AST",
    34: "SAM",
    35: "RDM",
    36: "BLU",
    37: "GNB",
    38: "DNC",
    39: "RPR",
    40: "SGE",
};

const playerNicks = Options.PlayerNicks = {};
addOverlayListener("PartyChanged", (e) => {
    for (const [key] of Object.entries(playerNicks)) {
        delete playerNicks[key];
    }
    for (const party of e.party) {
        let playerName = sablePlayerNicknames[party.name];
        if (playerName === undefined)
            playerName = party.name.split(" ", 1)[0];
        const jobPlusFirstName = jobIDToEN[party.job] + " - " + playerName;

        if (jobPlusFirstName) {
            playerNicks[party.name] = jobPlusFirstName;
        }
    }
    console.log("enable name to job: " + JSON.stringify(playerNicks));
});

Options.Triggers.push(
    ...[
        {
            zoneRegex: /.*/,
            filename: 'user global',
            timelineTriggers: [
                /*                {
                                    id: '👋 Sable Feint',
                                    regex: /^👋 (?<sableText>Feint)/,
                                    beforeSeconds: buffsToTime['Feint'],
                                    alarmText: function (data, matches) {
                                        return '👋 ' + matches.sableText;
                                    },
                                },*/
                {
                    id: '👋 Sable Timeline Alerts',
                    regex: /^👋 (?<sabletext>.*)/,
                    alarmText: function (data, matches) {
                        return '👋 ' + matches.sabletext;
                    },
                },
            ],
        },
    ],
);