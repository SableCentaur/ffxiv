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

Options.Triggers = [
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
