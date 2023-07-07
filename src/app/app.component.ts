import { Component } from '@angular/core';
import { GHOSTS } from './data';
import { Evidence, Speed } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly Evidence = Evidence;
  public readonly Speed = Speed;
  public readonly ghosts = GHOSTS;
}
