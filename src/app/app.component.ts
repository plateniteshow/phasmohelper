import { Component, OnInit } from '@angular/core';
import { GHOSTS } from './data';
import { Difficulty, Evidence, Speed } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly Difficulty = Difficulty;
  public readonly Evidence = Evidence;
  public readonly Speed = Speed;
  public readonly ghosts = GHOSTS;

  public difficulty = Difficulty.PROFESSIONAL;
  public evidenceSelection: any;

  public ngOnInit(): void {
  }
}
