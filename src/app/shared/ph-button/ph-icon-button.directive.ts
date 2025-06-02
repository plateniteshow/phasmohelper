import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[ph-icon-button]',
    standalone: false
})
export class PhIconButtonDirective {
  @HostBinding('class.ph-icon-button')
  public phOutlinedButton = true;
}
