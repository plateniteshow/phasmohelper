import { FormControl } from "@angular/forms";

export enum Difficulty {
  PROFESSIONAL = "Professional",
  NIGHTMARE = "Nightmare",
  INSANITY = "Insanity",
  APOCALYPSE = "Apocalypse",
}

export enum Evidence {
  DOTS_PROJECTOR = "D.O.T.S Projector",
  EMF_LEVEL_5 = "EMF Level 5",
  ULTRAVIOLET = "Ultraviolet",
  FREEZING_TEMPERATURES = "Freezing Temperatures",
  GHOST_ORB = "Ghost Orb",
  SPIRIT_BOX = "Spirit Box",
  GHOST_WRITING = "Ghost Writing",
}

export enum Speed {
  SLOW = "Slow",
  NORMAL = "Normal",
  FAST = "Fast",
}

export type Ghost = {
  id: number;
  behaviors?: string[];
  evidences: Evidence[];
  speeds: Speed[];
  forcedEvidence?: Evidence;
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
