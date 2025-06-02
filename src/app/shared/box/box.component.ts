import { Component, HostBinding, input } from '@angular/core';

@Component({
	selector: 'box',
	template: '<ng-content></ng-content>',
	styleUrls: ['./box.component.scss'],
	standalone: true,
})
export class BoxComponent {
	@HostBinding('class.active')
	public readonly active = input<boolean>(false);

	@HostBinding('class.disabled')
	public readonly disabled = input<boolean>(false);

	@HostBinding('class.indeterminate')
	public readonly indeterminate = input<boolean>(false);
}
