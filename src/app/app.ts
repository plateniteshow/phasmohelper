import { FormControl } from "@angular/forms";

export enum EDifficulty {
  PROFESSIONAL = "Professional",
  NIGHTMARE = "Nightmare",
  INSANITY = "Insanity",
  APOCALYPSE = "Apocalypse",
}

export enum EEvidence {
  DOTS_PROJECTOR = "D.O.T.S Projector",
  EMF_LEVEL_5 = "EMF Level 5",
  ULTRAVIOLET = "Ultraviolet",
  FREEZING_TEMPERATURES = "Freezing Temperatures",
  GHOST_ORB = "Ghost Orb",
  SPIRIT_BOX = "Spirit Box",
  GHOST_WRITING = "Ghost Writing",
}

export enum ESpeed {
  SLOW = "Slow",
  NORMAL = "Normal",
  FAST = "Fast",
}

export type Ghost = {
  id: number;
  behaviors?: string[];
  evidences: EEvidence[];
  speeds: ESpeed[];
  forcedEvidence?: EEvidence;
  huntSanity: number;
  huntSanityInfo?: string;
  huntSpeed: number[];
  huntSpeedInfo?: string;
  name: string;
  tells?: string[];
}

export type ControlsOf<T> = Required<{
  [K in keyof T]: FormControl<T[K]>;
}>;
