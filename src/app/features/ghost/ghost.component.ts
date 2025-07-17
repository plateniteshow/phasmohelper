import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

import { GhostBoxComponent } from './components/ghost-box/ghost-box.component';
import { GhostInput } from './ghost';

@Component({
	selector: 'ghost',
	templateUrl: './ghost.component.html',
	styleUrls: ['./ghost.component.scss'],
	imports: [GhostBoxComponent],
})
export class GhostComponent {
	public readonly data: InputSignal<GhostInput[]> = input.required();
	public readonly $click: OutputEmitterRef<GhostInput['id']> = output<GhostInput['id']>();
	public readonly $shiftClick: OutputEmitterRef<GhostInput['id']> = output<GhostInput['id']>();

	////////////////////
	// Public Methods //
	////////////////////

	public onClick(event: MouseEvent, id: GhostInput['id']): void {
		if (event.shiftKey) {
			this.$shiftClick.emit(id);
			return;
		}
		this.$click.emit(id);
	}
}
