import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerUnitsComponent } from './player-units.component';

describe('PlayerUnitsComponent', () => {
  let component: PlayerUnitsComponent;
  let fixture: ComponentFixture<PlayerUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
