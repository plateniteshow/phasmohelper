import { Evidence, Ghost, Speed } from "./app";

export const GHOSTS: Ghost[] = [
  // Spirit
  {
    name: 'Spirit',
    evidences: [Evidence.EMF5, Evidence.SPIRITBOX, Evidence.WRITING],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: ['Smudging the ghost will prevent a hunt for 180s instead of the normal 90s'],
  },
  // Wraith
  {
    name: 'Wraith',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.SPIRITBOX],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: ['Ghost will never step in salt'],
    behaviors: ['Can teleport to random players, leaving EMF 2 or EMF 5'],
  },
  // Phantom
  {
    name: 'Phantom',
    evidences: [Evidence.DOTS, Evidence.FINGERPRINTS, Evidence.SPIRITBOX],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: [
      'Does not appear in ghost photo',
      'During an event, taking a photo will cause the ghost to disappear',
      'Less visible during hunts',
    ],
    behaviors: ['Can roam to a random player, leaving EMF 2'],
  },
  // Poltergeist
  {
    name: 'Poltergeist',
    evidences: [Evidence.DOTS, Evidence.SPIRITBOX, Evidence.WRITING],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: [
      'Can throw multiple objects at once, decreasing player sanity 2% per item thrown',
      'Will throw an item every 0.5s during a hunt',
    ],
    behaviors: [
      'Higher chance to throw & interact with objects',
      'Can throw objects faster and further'
    ],
  },
  // Banshee
  {
    name: 'Banshee',
    evidences: [Evidence.DOTS, Evidence.FINGERPRINTS, Evidence.ORBS],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: ['Banshee scream through paramic'],
    behaviors: [
      'Will only go after its target during a hunt (unless target is outside)',
      'Will roam toward its target, without leaving EMF 2',
      'Prefers singing ghost events',
    ],
    huntSanityInfo: 'Hunts when target\'s sanity is 50% or lower (even if target is outside)',
  },
  // Jinn
  {
    name: 'Jinn',
    evidences: [Evidence.EMF5, Evidence.FINGERPRINTS, Evidence.FREEZING],
    speeds: [Speed.NORMAL, Speed.FAST],
    huntSanity: 50,
    huntSpeed: [1.7, 2.5],
    tells: ['Ability will drop nearby players\' sanity by 25% with EMF 2 at the breaker'],
    behaviors: ['Can not turn off fuse box'],
    huntSpeedInfo: '2.5m/s when fuse box is on and ghost is further than 3m from a seen player, 1.7m/s otherwise',
  },
  // Mare
  {
    name: 'Mare',
    evidences: [Evidence.ORBS, Evidence.SPIRITBOX, Evidence.WRITING],
    speeds: [Speed.NORMAL],
    huntSanity: 60,
    huntSpeed: [1.7],
    tells: [
      'Ability to immediately turn off a light that a player has turned on',
      'Can not turn on lights',
    ],
    behaviors: ['More likely to turn off and bust lights'],
    huntSanityInfo: '60% when lights are off in the ghost\'s current room, 40% when on',
  },
  // Revenant
  {
    name: 'Revenant',
    evidences: [Evidence.FREEZING, Evidence.ORBS, Evidence.WRITING],
    speeds: [Speed.SLOW, Speed.FAST],
    huntSanity: 50,
    huntSpeed: [1.0, 3.0],
    huntSpeedInfo: '3.0m/s immediately once the player has been sensed (equipment, voice, or line of sight) and until ghost has reached the players last known location where it will gradually slow down to 1m/s',
  },
  // Shade
  {
    name: 'Shade',
    evidences: [Evidence.EMF5, Evidence.FREEZING, Evidence.WRITING],
    speeds: [Speed.NORMAL],
    huntSanity: 35,
    huntSpeed: [1.7],
    tells: [
      'Does not do interactions that result in EMF 2, 3, or 5 with someone in the room (except writing)',
      'Will not hunt with someone in the room',
    ],
    behaviors: [
      'More ghost events at lower sanity',
      'Less likely to appear as full ghost model',
      'Has a chance to appear as a shadow if summoned from music box or summoning circle',
    ],
  },
  // Demon
  {
    name: 'Demon',
    evidences: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.WRITING],
    speeds: [Speed.NORMAL],
    huntSanity: 70,
    huntSpeed: [1.7],
    tells: [
      'Smudging the ghost will prevent a hunt for 60s instead of the normal 90s',
      '20s minimum hunt cool-down (normal is 25s)',
    ],
    behaviors: ['Crucifix range effect increased to 5m instead of 3m'],
    huntSanityInfo: 'Ability to hunt at any sanity, hunts normally at 70%',
  },
  // Yurei
  {
    name: 'Yurei',
    evidences: [Evidence.DOTS, Evidence.FREEZING, Evidence.ORBS],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: [
      'Can shut a door and drop sanity of nearby players by 15% if a door is in the room',
      'Only ghost that can close an exit door outside of a hunt or ghost event',
    ],
    behaviors: ['Smudge stops wandering for 90 seconds'],
  },
  // Oni
  {
    name: 'Oni',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.FREEZING],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: [
      'Drains 20% on ghost events, instead of 10%',
      'Will not do ghost mist event',
      'More visible during hunts',
    ],
    behaviors: ['More active around multiple people'],
  },
  // Yokai
  {
    name: 'Yokai',
    evidences: [Evidence.DOTS, Evidence.ORBS, Evidence.SPIRITBOX],
    speeds: [Speed.NORMAL],
    huntSanity: 80,
    huntSpeed: [1.7],
    tells: ['Hearing/electronic distance is less than 2.5m during hunts'],
    behaviors: ['More active when talked to'],
    huntSanityInfo: 'Can hunt up to 80% sanity when talking near it, hunts normally at 50%',
  },
  // Hantu
  {
    name: 'Hantu',
    evidences: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.ORBS],
    forcedEvidence: Evidence.FREEZING,
    speeds: [Speed.SLOW, Speed.NORMAL, Speed.FAST],
    huntSanity: 50,
    huntSpeed: [1.44, 1.7, 2.7],
    tells: [
      'Ghost can have visible freezing breath in any room during hunts with the breaker off',
      'Cannot turn breaker on',
    ],
    behaviors: ['High chance to turn off breaker'],
    huntSpeedInfo: 'Faster in colder temperatures, does not speed up in line-of-sight',
  },
  // Goryo
  {
    name: 'Goryo',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.FINGERPRINTS],
    speeds: [Speed.NORMAL],
    forcedEvidence: Evidence.DOTS,
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: ['DOTs only appear on camera and will rarely show if player is in the same room'],
    behaviors: [
      'Can not change favorite rooms',
      'Does not roam long distances',
    ],
  },
  // Myling
  {
    name: 'Myling',
    evidences: [Evidence.EMF5, Evidence.FINGERPRINTS, Evidence.WRITING],
    speeds: [Speed.NORMAL],
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: ['Footsteps and vocals cannot be heard more than 12m away during hunts (normal is 20m)'],
    behaviors: ['Lots of paranormal sounds through paramic'],
  },
  // Onryo
  {
    name: 'Onryo',
    evidences: [Evidence.FREEZING, Evidence.ORBS, Evidence.SPIRITBOX],
    speeds: [Speed.NORMAL],
    huntSanity: 60,
    huntSpeed: [1.7],
    tells: ['Will hunt at any sanity after extinguishing every 3rd flame if no other flames or crucifix will prevent it'],
    behaviors: [
      'Flames act like crucifixes, will blow out a flame if it tries to hunt (within 4m)',
      'More likely to extinguish a flame, the more players that are dead',
    ],
    huntSanityInfo: 'Can hunt at any sanity using its ability, hunts normally at 60%',
  },
  // The Twins
  {
    name: 'The Twins',
    evidences: [Evidence.EMF5, Evidence.FREEZING, Evidence.SPIRITBOX],
    speeds: [Speed.SLOW, Speed.FAST],
    huntSanity: 50,
    huntSpeed: [1.53, 1.87],
    tells: ['Often do interactions at the same time'],
    behaviors: ['Decoy only does interactions/EMF, no evidence or sensors'],
    huntSpeedInfo: 'Either 1.53m/s or 1.87m/s depending on which twin hunted',
  },
  // Raiju
  {
    name: 'Raiju',
    evidences: [Evidence.DOTS, Evidence.EMF5, Evidence.ORBS],
    speeds: [Speed.NORMAL, Speed.FAST],
    huntSanity: 65,
    huntSpeed: [1.7, 2.5],
    tells: ['During a hunt, flickers electronics at 15m range instead of 10m'],
    huntSanityInfo: 'Can hunt at 65% sanity near active player equipment',
    huntSpeedInfo: '2.5m/s near active player equipment, 1.7m/s otherwise',
  },
  // Obake
  {
    name: 'Obake',
    evidences: [Evidence.EMF5, Evidence.FINGERPRINTS, Evidence.ORBS],
    speeds: [Speed.NORMAL],
    forcedEvidence: Evidence.FINGERPRINTS,
    huntSanity: 50,
    huntSpeed: [1.7],
    tells: [
      'Special 6 fingered fingerprints',
      'Has a 6.66% chance to change ghost models when flickering during hunts (guaranteed once per hunt, returns to original model)',
      'Does not always leave fingerprints',
      'Can make fingerprints disappear earlier than 2 minutes',
    ],
  },
  // The Mimic
  {
    name: 'The Mimic',
    evidences: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.SPIRITBOX, Evidence.ORBS],
    speeds: [Speed.SLOW, Speed.NORMAL, Speed.FAST],
    huntSanity: 50,
    huntSpeed: [1.0, 1.7, 2.75],
    tells: [
      'Always shows orbs as additional fake evidence (4th evidence) even in 0 evidence',
      'Copies the behavior and traits of other ghosts',
      'Changes ghost behavior every 30 seconds to 2 minutes',
    ],
    huntSanityInfo: 'Copies behavior of currently mimicked ghost',
    huntSpeedInfo: 'Copies behavior of currently mimicked ghost',
  },
  // Moroi
  {
    name: 'Moroi',
    evidences: [Evidence.FREEZING, Evidence.SPIRITBOX, Evidence.WRITING],
    speeds: [Speed.SLOW, Speed.NORMAL, Speed.FAST],
    forcedEvidence: Evidence.SPIRITBOX,
    huntSanity: 50,
    huntSpeed: [1.5, 1.7, 2.25],
    tells: [
      'Places curse on player when heard through paramic or spirit box, curse drops sanity 2x as fast',
      'Holding a lit candle will not prevent sanity drain if cursed',
      'During a hunt, smudging the ghost will blind it for 12s (normal is 6s)',
    ],
    huntSpeedInfo: 'Faster when average sanity is lower, can reach a speed of 3.71 m/s when in line of sight',
  },
  // Deogen
  {
    name: 'Deogen',
    evidences: [Evidence.DOTS, Evidence.SPIRITBOX, Evidence.WRITING],
    speeds: [Speed.SLOW, Speed.FAST],
    forcedEvidence: Evidence.SPIRITBOX,
    huntSanity: 40,
    huntSpeed: [0.4, 3.0],
    tells: [
      'Heavy breathing through spirit box when within 1m of the ghost',
      'Cannot hide from a Deogen',
    ],
    behaviors: ['Increased chance for DOTs / Writing'],
    huntSpeedInfo: '3.0m/s when far away, drops to 0.4m/s when close to the player',
  },
  // Thaye
  {
    name: 'Thaye',
    evidences: [Evidence.DOTS, Evidence.ORBS, Evidence.WRITING],
    speeds: [Speed.SLOW, Speed.NORMAL, Speed.FAST],
    huntSanity: 75,
    huntSpeed: [1.0, 1.7, 2.75],
    behaviors: [
      'Ghost ages over time (every 1-2 minutes) while player is nearby',
      'More active when younger',
      'Increased chance for DOTs / Writing',
    ],
    huntSanityInfo: 'Hunts at 75% at its youngest, 15% at its oldest',
    huntSpeedInfo: '2.75m/s at its youngest, 1.0m/s at its oldest. Does not speed up in line-of-sight'
  },
];
