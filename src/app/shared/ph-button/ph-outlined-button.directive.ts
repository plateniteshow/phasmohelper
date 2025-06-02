import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[ph-outlined-button]' })
export class PhOutlinedButtonDirective {
  @HostBinding('class.ph-outlined-button')
	public phOutlinedButton = true;
}
