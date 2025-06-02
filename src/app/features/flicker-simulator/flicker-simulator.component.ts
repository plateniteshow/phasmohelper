import { Component, HostListener, ViewChild } from '@angular/core';

import { PhButtonComponent } from '../../shared/ph-button/ph-button.component';
import { PhOutlinedButtonDirective } from '../../shared/ph-button/ph-outlined-button.directive';
import { DEFAULT_FLICKERING_CONFIG, ONI_FLICKERING_CONFIG, PHANTOM_FLICKERING_CONFIG } from './flicker-simulator';
import { FlickeringIconConfiguration } from './flickering-icon/flickering-icon';
import { FlickeringIconComponent } from './flickering-icon/flickering-icon.component';

@Component({
	selector: 'flicker-simulator',
	templateUrl: './flicker-simulator.component.html',
	styleUrls: ['./flicker-simulator.component.scss'],
	imports: [
		FlickeringIconComponent,
		PhButtonComponent,
		PhOutlinedButtonDirective,
	],
})
export class FlickerSimulatorComponent {
	public readonly phantomConfig: FlickeringIconConfiguration = PHANTOM_FLICKERING_CONFIG;
	public readonly defaultConfig: FlickeringIconConfiguration = DEFAULT_FLICKERING_CONFIG;
	public readonly oniConfig: FlickeringIconConfiguration = ONI_FLICKERING_CONFIG;

  @ViewChild('phantom')
	public phantom!: FlickeringIconComponent;

  @ViewChild('default')
  public default!: FlickeringIconComponent;

  @ViewChild('oni')
  public oni!: FlickeringIconComponent;

  public flickering = false;

  @HostListener('document:keydown.F', ['$event'])
  public onKeydownFHandler(): void {
  	if (this.flickering) {
  		this.stopFlickering();
  	} else {
  		this.startFlickering();
  	}
  }

  @HostListener('document:keydown.Escape', ['$event'])
  public onKeydownEscapeHandler(): void {
  	this.stopFlickering();
  }

  public startFlickering = (): void => {
  	this.flickering = true;
  	this.phantom?.startFlickering();
  	this.default?.startFlickering();
  	this.oni?.startFlickering();
  };

  public stopFlickering = (): void => {
  	this.flickering = false;
  	this.phantom?.stopFlickering();
  	this.default?.stopFlickering();
  	this.oni?.stopFlickering();
  };
}
