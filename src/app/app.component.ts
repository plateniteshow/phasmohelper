/* eslint-disable object-curly-newline */
import { Component, computed, HostListener, Signal, signal, WritableSignal } from '@angular/core';

import { Ghost } from './app';
import { GHOSTS } from './data';
import { GhostInput } from './features/ghost/ghost';
import { GhostComponent } from './features/ghost/ghost.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	imports: [
		GhostComponent,
	],
})
export class AppComponent {
	public readonly ghostData: Signal<GhostInput[]> = computed((): GhostInput[] => {
		return GHOSTS.map(({ id, name, evidences, huntSanity }: Ghost): GhostInput => ({
			id,
			name,
			evidences,
			huntSanity,
			isSelected: this.selectedGhosts().includes(id),
			isExcluded: this.excludedGhosts().includes(id),
		}));
	});

	private readonly excludedGhosts: WritableSignal<Ghost['id'][]> = signal([]);
	private readonly selectedGhosts: WritableSignal<Ghost['id'][]> = signal([]);

	///////////////////////
	// Decorated Methods //
	///////////////////////

	@HostListener('document:keydown.R', ['$event'])
	@HostListener('document:keydown.Escape', ['$event'])
	public onKeydownHandler(): void {
		this.reset();
	}

	////////////////////
	// Public Methods //
	////////////////////

	public onClickGhost = (id: GhostInput['id']): void => {
		this.selectedGhosts.update((ids) => {
			if (ids.includes(id)) {
				return ids.filter((ghostId) => ghostId !== id);
			}
			return [...ids, id];
		});
	};

	public onShiftClickGhost = (id: GhostInput['id']): void => {
		this.excludedGhosts.update((ids) => {
			if (ids.includes(id)) {
				return ids.filter((ghostId) => ghostId !== id);
			}
			return [...ids, id];
		});
	};

	public reset = (): void => {
		this.selectedGhosts.set([]);
		this.excludedGhosts.set([]);
	};
}
