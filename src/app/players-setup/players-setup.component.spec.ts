import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersSetupComponent } from './players-setup.component';

describe('PlayersSetupComponent', () => {
  let component: PlayersSetupComponent;
  let fixture: ComponentFixture<PlayersSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
