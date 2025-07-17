import { Ghost } from "src/app/app";

type GhostInput = Pick<Ghost, 'id' | 'name' | 'evidences' | 'huntSanity'> & {
	isSelected: boolean;
	isExcluded: boolean;
};

export type { GhostInput };
