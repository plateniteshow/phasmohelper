import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostInfoComponent } from './ghost-info.component';

describe('GhostInfoComponent', () => {
  let component: GhostInfoComponent;
  let fixture: ComponentFixture<GhostInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhostInfoComponent]
    });
    fixture = TestBed.createComponent(GhostInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
