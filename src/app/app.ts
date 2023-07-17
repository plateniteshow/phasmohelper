import { FormControl } from "@angular/forms";

export enum Difficulty {
  PROFESSIONAL = "Professional",
  NIGHTMARE = "Nightmare",
  INSANITY = "Insanity",
  APOCALYPSE = "Apocalypse",
}

export enum Evidence {
  DOTS = "DOTs",
  EMF5 = "EMF 5",
  FINGERPRINTS = "Fingerpints",
  FREEZING = "Freezing",
  ORBS = "Ghost Orbs",
  SPIRITBOX = "Spirit Box",
  WRITING = "Ghost Writing",
}

export enum Speed {
  SLOW = "Slow",
  NORMAL = "Normal",
  FAST = "Fast",
}

export type Ghost = {
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
