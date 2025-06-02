import { FlickeringIconConfiguration } from "./flickering-icon/flickering-icon";

export const PHANTOM_FLICKERING_CONFIG: FlickeringIconConfiguration = {
	minVisibilityLength: 0.08,
	minVisibilityLengthDeviation: undefined,
	maxVisibilityLength: 0.30,
	maxVisibilityLengthDeviation: undefined,
	minInvisibilityLength: 0.70,
	minInvisibilityLengthDeviation: undefined,
	maxInvisibilityLength: 1.92,
	maxInvisibilityLengthDeviation: undefined,
	minTotalPerFlickerLength: 1.00,
	minTotalPerFlickerLengthDeviation: undefined,
	maxTotalPerFlickerLength: 2.00,
	maxTotalPerFlickerLengthDeviation: undefined,
	name: 'Phantom',
};

export const DEFAULT_FLICKERING_CONFIG = {
	minVisibilityLength: 0.08,
	minVisibilityLengthDeviation: undefined,
	maxVisibilityLength: 0.30,
	maxVisibilityLengthDeviation: undefined,
	minInvisibilityLength: 0.10,
	minInvisibilityLengthDeviation: undefined,
	maxInvisibilityLength: 0.92,
	maxInvisibilityLengthDeviation: undefined,
	minTotalPerFlickerLength: 0.30,
	minTotalPerFlickerLengthDeviation: undefined,
	maxTotalPerFlickerLength: 1.00,
	maxTotalPerFlickerLengthDeviation: undefined,
	name: 'Default',
};

export const ONI_FLICKERING_CONFIG = {
	minVisibilityLength: 0.02,
	minVisibilityLengthDeviation: undefined,
	maxVisibilityLength: 0.50,
	maxVisibilityLengthDeviation: undefined,
	minInvisibilityLength: 0.01,
	minInvisibilityLengthDeviation: undefined,
	maxInvisibilityLength: 0.50,
	maxInvisibilityLengthDeviation: undefined,
	minTotalPerFlickerLength: 0.30,
	minTotalPerFlickerLengthDeviation: undefined,
	maxTotalPerFlickerLength: 1.00,
	maxTotalPerFlickerLengthDeviation: undefined,
	name: 'Oni',
};
