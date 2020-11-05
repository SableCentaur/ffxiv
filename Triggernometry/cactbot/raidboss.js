'use strict';

console.log('git raidboss user file');
Options.Debug = true;
console.log('Language set to ' + Options.Language);
Options.SpokenAlertsEnabled = false;

Options.PlayerNicks = {
  'Billi Billi': 'Billy',
  'Rade Redsteele': 'Rad',
  'Falcon Curaga': 'Falcon',
  'Pucca Nyah': 'Pucca',
  'Sable Centaura': 'Sable',
  'Hyzer Fen\'jar': 'Hyzer',
  'Maddie Mcqueen': 'Maddie',
  'Stick Mcqueen': 'Stick',
  'Joseph Mcidiot': 'Joe',
  'Senah Arlynn': 'Senah',
  'Poyoko Panda': 'Poyo',
  'Primal Forever': 'Joe',
  'Bongo Cat': 'Bongo',
};

// Prepend emoji to all added timeline events to make them stand out.
function emojify(arr) {
  let emojo = '👋';
  let search = Regexes.Parse(/^\s*(\y{Float})\s+"\s*/);
  for (let i = 0; i < arr.length; ++i)
    arr[i] = arr[i].replace(search, '$1 " ' + emojo + ' ');
  return arr;
}

// /echo :Bahamut Prime:26E8: for adds
// /echo :Bahamut Prime:2707: for golden
Options.Triggers = [
  {
    zoneRegex: /The Unending Coil Of Bahamut \(Ultimate\)/,
    filename: 'user ucob',
    timeline: [
      '1208 "(conv, shake)"', // Morn Afah #1
      '1214 "(holm)"', // Akh Morn #1
      '1238 "(early veng)"', // Akh Morn #2
      '1264 "(reprisal)"', // Morn Afah #2
      '1297 "(raw shake)"', // Morn Afah #3
      '1309 "(hallow)"', // Akh Morn #3
      '1348 "(conv, reprisal)"', // Morn Afah #4
      '1398 "(shake)"', // Morn Afah #5
      '1412 "(thots n prayers)"', // Enrage
      'alarmtext "Sentence/Ravensbeak" before 10 "PAP USE YOUR BLOODY COOLDOWNS"',
      'infotext "Morn Afah #1" before 10 "conv, shake"',
      'infotext "Morn Afah #2" before 8 "reprisal"',
      'infotext "Morn Afah #3" before 8 "raw shake"',
      'infotext "Morn Afah #4" before 8 "conv, reprisal"',
      'infotext "Morn Afah #5" before 8 "shake"',
    ],
  },
  {
    zoneRegex: /^The Weapon's Refrain \(Ultimate\)$/,
    filename: 'user uwu',
    timeline: [
      'alarmtext "Dark IV" after 1 "USE THE BLOODY TANK LB!"',
    ],
  },
  {
    zoneRegex: /The Second Coil Of Bahamut - Turn \(2\)/,
    filename: 'user t7',
    triggers: [
      {
        id: 'T7 Voice',
        regex: /1A:(\y{Name}) gains the effect of Cursed Voice from  for (\y{Float}) Seconds/,
        run: function(data, matches) {
          data.voices = data.voices || {};
          data.voices[matches[1]] = matches[2];
        },
      },
      {
        id: 'T7 Voice Got Three',
        regex: /1A:\y{Name} gains the effect of Cursed Voice/,
        condition: function(data) {
          // In case log lines get dropped wait a little and go anyway.
          return data.voices && Object.keys(data.voices).length == 3;
        },
        infoText: function(data) {
          if (!data.voices)
            return;

          // Never freeze.
          let neverPerson = 'Paprika Rika';
          // Always freeze first.
          let priorityPerson = 'Ryythe Larke';
          // Prefer not this person, unless the next best person has a short time.
          let preferPerson = 'Elmindreda Far\'shaw';
          let minPreferSeconds = 6;

          delete data.voices[neverPerson];
          let order = [];

          if (priorityPerson in data.voices) {
            delete data.voices[priorityPerson];
            order.push(priorityPerson);
          }

          let preferPersonTime = data.voices[preferPerson];
          delete data.voices[preferPerson];

          let sortedVoices = Object.keys(data.voices).sort(function(a, b) {
            return data.voices[b] - data.voices[a];
          });

          order = order.concat(sortedVoices);
          if (preferPersonTime) {
            let bestTime = data.voices[order[0]];
            if (bestTime < minPreferSeconds && order[0] != priorityPerson &&
                preferPersonTime > bestTime)
              order.unshift(preferPerson);
            else
              order.push(preferPerson);
          }

          delete data.voices;

          return 'Freeze: ' + order.map(data.ShortName).join(', ');
        },
      },
      {
        id: 'T7 Voice Cleanup',
        regex: /1A:\y{Name} gains the effect of Cursed Voice/,
        suppressSeconds: 10,
        delaySeconds: 5,
        run: function(data) {
          delete data.voices;
        },
      },
    ],
  },
  {
    zoneRegex: /^Eden's Verse: Fulmination \(Savage\)$/,
    filename: 'user e5s',
    timeline: function(data) {
      if (data.job != 'MNK')
        return;
      return emojify([
        '10 "Orb"',
        '50 "Riddle Of Earth"',
        '60 "Mantra"',
        '62 "Orb"',
        '73 "Feint"',
        '76 "Orb"',
        '116 "True North"',
        '124 "Riddle Of Earth"',
        '147 "Orb"',
        '150 "True North"',
        '190 "Feint"',
        '205 "True North"',
        '218 "Mantra"',
        '220 "Orb"',
        '235 "Riddle Of Earth"',
        '250 "True North"',
        '280 "Feint"',
        '293 "True North"',
        '295 "Riddle Of Earth"',
        '314 "Mantra"',
        '316 "Orb"',
        '347 "True North"',
        '365 "Riddle Of Earth"',
        '366 "Hold Buffs"',
        '380 "Feint"',
        '392 "Orb"',
        '418 "True North"',
        '425 "Riddle Of Earth"',
        '462 "True North"',
        '484 "Mantra"',
        '486 "Riddle Of Earth"',
        '522 "Orb"',
        '531 "True North"',
        '553 "Riddle Of Earth"',
        '565 "Orb"',
        '580 "Mantra"',
      ]);
    },
  },
  {
    zoneRegex: /^Eden's Gate: Descent \(Savage\)$/,
    filename: 'user e2s',
    timeline: function(data) {
      if (data.job != 'DRK')
        return;
      return emojify([
        '26 "Reprisal"',
        '29 "Missionary"',
        '102 "Reprisal"',
        '107 "Missionary"',
        '221 "Reprisal"',
        '246 "Missionary"',
        '372 "Missionary"',
      ]);
    },
  },
  {
    zoneRegex: /^Eden's Gate: Inundation \(Savage\)$/,
    filename: 'user e3s',
    timeline: function(data) {
      if (data.job != 'DRK')
        return;
      return emojify([
        '3 "Missionary"',
        '23 "goshu hallowed"',
        '50 "Reprisal?"',
        '125 "Reprisal"',
        '145 "Missionary"',
        '155 "Provoke"',
        '167 "Living"',
        '195 "Reprisal"',
        '235 "Missionary"',
        '310 "rampart"',
        '312 "Reprisal"',
        '314 "shadow wall"',
        '337.5 "Missionary"',
        '418 "Reprisal"',
        '427 "Missionary"',
        '475 "Provoke"',
        '489 "Reprisal"',
        '490 "Living"',
        '513 "Missionary"',
      ]);
    },
  },
  {
    zoneRegex: /^Eden's Gate: Sepulture \(Savage\)$/,
    filename: 'user e4s',
    timeline: function(data) {
      if (data.job != 'DRK')
        return;
      return emojify([
        '10 "Living"',
        '35 "Missionary"',
        '40 "dark mind"',
        '50 "Reprisal"',
        '330 "Missionary"',
        '340 "Reprisal"',
        '630 "Missionary"',
        '662 "Reprisal"',
        '715 "TBN Goshu"',
        'alarmtext "TBN Goshu" before 5 "SAVE GOSHU"',
        '1020 "Missionary"',
        '1052 "rampart"',
        '1056 "dark mind"',
        '1056 "shadow wall"',
        '1067 "Reprisal"',
        '1171 "Missionary"',
        '1179 "Reprisal"',
        '1285 "rampart"',
        '1292 "dark mind"',
        '1283.5 "Missionary"',
        '1290 "Reprisal"',
        '1315 "provoke"',
        '1317 "Living"',
        '1370 "Reprisal"',
        '1403 "shadow wall"',
        '1410 "Missionary"',
        '1415 "dark mind"',
        '1433 "Reprisal"',
        '1480 "rampart"',
      ]);
    },
  },
];

// Play tts as well as the on screen text.
let playTTS = {
  SpeechAlert: true,
  TextAlert: true,
  SoundAlert: true,
};

// Run regardless of condition.
let alwaysTrueCondition = {
  Condition: function() {
    return true;
  },
};

Options.PerTriggerOptions = {
  'O4S2 Flood of Naught: Inside': playTTS,
  'O4S2 Flood of Naught: Outside': playTTS,
  'O4S2 Flood of Naught: Colors Purple Blue': playTTS,
  'O4S2 Flood of Naught: Colors Blue Purple': playTTS,
  'UCU Nael Quote 1': playTTS,
  'UCU Nael Quote 2': playTTS,
  'UCU Nael Quote 3': playTTS,
  'UCU Nael Quote 4': playTTS,
  'UCU Nael Quote 5': playTTS,
  'UCU Nael Quote 6': playTTS,
  'UCU Nael Quote 7': playTTS,
  'UCU Nael Quote 8': playTTS,
  'UCU Nael Quote 9': playTTS,
  'UCU Nael Quote 10': playTTS,
  'UCU Nael Quote 11': playTTS,
  'UCU Nael Quote 12': playTTS,
  'UCU Nael Quote 13': playTTS,
  'UCU Nael Quote 14': playTTS,
  'General Provoke': alwaysTrueCondition,
  'General Ultimatum': alwaysTrueCondition,
  'General Shirk': alwaysTrueCondition,
  'General Holmgang': alwaysTrueCondition,
  'General Hallowed': alwaysTrueCondition,
  'General Living': alwaysTrueCondition,
  'General Walking': alwaysTrueCondition,
};
