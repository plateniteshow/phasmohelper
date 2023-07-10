import { Evidence, Ghost } from "./app";

export const GHOSTS: Ghost[] = [
  // Spirit
  {
    name: 'Spirit',
    evidences: [Evidence.EMF5, Evidence.SPIRITBOX, Evidence.WRITING],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: ['lorem ipsum'],
    behaviors: ['lorem ipsum'],
    huntSanityInfo: 'lorem ipsum',
    huntSpeedInfo: 'lorem ipsum',
  },
  // Wraith
  {
    name: 'Wraith',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.SPIRITBOX],
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Phantom
  {
    name: 'Phantom',
    evidences: [Evidence.DOTS, Evidence.FINGERPRINTS, Evidence.SPIRITBOX],
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Poltergeist
  {
    name: 'Poltergeist',
    evidences: [Evidence.DOTS, Evidence.SPIRITBOX, Evidence.WRITING],
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Banshee
  {
    name: 'Banshee',
    evidences: [Evidence.DOTS, Evidence.FINGERPRINTS, Evidence.ORBS],
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Jinn
  {
    name: 'Jinn',
    evidences: [Evidence.EMF5, Evidence.FINGERPRINTS, Evidence.FREEZING],
    huntSanity: 50,
    huntSpeed: [1.7, 2.5],
  },
  // Mare
  {
    name: 'Mare',
    evidences: [Evidence.ORBS, Evidence.SPIRITBOX, Evidence.WRITING],
    huntSanity: 60,
    huntSpeed: [1.7],
  },
  // Revenant
  {
    name: 'Revenant',
    evidences: [Evidence.FREEZING, Evidence.ORBS, Evidence.WRITING],
    huntSanity: 50,
    huntSpeed: [1.0, 3.0],
    // does not speed up
  },
  // Shade
  {
    name: 'Shade',
    evidences: [Evidence.EMF5, Evidence.FREEZING, Evidence.WRITING],
    huntSanity: 35,
    huntSpeed: [1.7],
  },
  // Demon
  {
    name: 'Demon',
    evidences: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.WRITING],
    huntSanity: 70,
    huntSpeed: [1.7],
  },
  // Yurei
  {
    name: 'Yurei',
    evidences: [Evidence.DOTS, Evidence.FREEZING, Evidence.ORBS],
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Oni
  {
    name: 'Oni',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.FREEZING],
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Yokai
  {
    name: 'Yokai',
    evidences: [Evidence.DOTS, Evidence.ORBS, Evidence.SPIRITBOX],
    huntSanity: 80,
    huntSpeed: [1.7],
  },
  // Hantu
  {
    name: 'Hantu',
    evidences: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.ORBS],
    forcedEvidence: Evidence.FREEZING,
    huntSanity: 50,
    huntSpeed: [1.44, 1.7, 2.7],
    // does not speed up
  },
  // Goryo
  {
    name: 'Goryo',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.FINGERPRINTS],
    forcedEvidence: Evidence.DOTS,
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Myling
  {
    name: 'Myling',
    evidences: [Evidence.EMF5, Evidence.FINGERPRINTS, Evidence.WRITING],
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // Onryo
  {
    name: 'Onryo',
    evidences: [Evidence.FREEZING, Evidence.ORBS, Evidence.SPIRITBOX],
    huntSanity: 60,
    huntSpeed: [1.7],
  },
  // The Twins
  {
    name: 'The Twins',
    evidences: [Evidence.EMF5, Evidence.FREEZING, Evidence.SPIRITBOX],
    huntSanity: 50,
    huntSpeed: [1.53, 1.87],
  },
  // Raiju
  {
    name: 'Raiju',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.ORBS],
    huntSanity: 65,
    huntSpeed: [1.7, 2.5],
  },
  // Obake
  {
    name: 'Obake',
    evidences: [Evidence.EMF5, Evidence.FINGERPRINTS, Evidence.ORBS],
    forcedEvidence: Evidence.FINGERPRINTS,
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  // The Mimic
  {
    name: 'The Mimic',
    evidences: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.SPIRITBOX, Evidence.ORBS],
    huntSanity: 50,
    huntSpeed: [1.0, 1.7, 2.75],
  },
  // Moroi
  {
    name: 'Moroi',
    evidences: [Evidence.FREEZING, Evidence.SPIRITBOX, Evidence.WRITING],
    forcedEvidence: Evidence.SPIRITBOX,
    huntSanity: 50,
    huntSpeed: [1.5, 1.7, 2.25],
  },
  // Deogen
  {
    name: 'Deogen',
    evidences: [Evidence.DOTS, Evidence.SPIRITBOX, Evidence.WRITING],
    forcedEvidence: Evidence.SPIRITBOX,
    huntSanity: 40,
    huntSpeed: [0.4, 3.0],
    // does not speed up
  },
  // Thaye
  {
    name: 'Thaye',
    evidences: [Evidence.DOTS, Evidence.ORBS, Evidence.WRITING],
    huntSanity: 75,
    huntSpeed: [1.0, 1.7, 2.75],
    // does not speed up
  },
];
