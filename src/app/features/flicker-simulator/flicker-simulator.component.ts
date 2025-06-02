import { Component, HostListener, ViewChild } from '@angular/core';
import { FlickeringIconComponent } from './flickering-icon/flickering-icon.component';
import { FlickeringIconConfiguration } from './flickering-icon/flickering-icon';
import { DEFAULT_FLICKERING_CONFIG, ONI_FLICKERING_CONFIG, PHANTOM_FLICKERING_CONFIG } from './flicker-simulator';

@Component({
    selector: 'flicker-simulator',
    templateUrl: './flicker-simulator.component.html',
    styleUrls: ['./flicker-simulator.component.scss'],
    standalone: false
})
export class FlickerSimulatorComponent {
  @ViewChild('phantom')
  public phantom!: FlickeringIconComponent;

  @ViewChild('default')
  public default!: FlickeringIconComponent;

  @ViewChild('oni')
  public oni!: FlickeringIconComponent;

  @HostListener('document:keydown.F', ['$event']) public onKeydownFHandler() {
    this.flickering ? this.stopFlickering() : this.startFlickering();
  }

  @HostListener('document:keydown.Escape', ['$event']) public onKeydownEscapeHandler() {
    this.stopFlickering();
  }

  public readonly phantomConfig: FlickeringIconConfiguration = PHANTOM_FLICKERING_CONFIG;
  public readonly defaultConfig: FlickeringIconConfiguration = DEFAULT_FLICKERING_CONFIG;
  public readonly oniConfig: FlickeringIconConfiguration = ONI_FLICKERING_CONFIG;

  public flickering = false;

  public startFlickering = (): void => {
    this.flickering = true;
    this.phantom?.startFlickering();
    this.default?.startFlickering();
    this.oni?.startFlickering();
  }

  public stopFlickering = (): void => {
    this.flickering = false;
    this.phantom?.stopFlickering();
    this.default?.stopFlickering();
    this.oni?.stopFlickering();
  }
}
