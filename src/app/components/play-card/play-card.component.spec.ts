import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCardComponent } from './play-card.component';

describe('PlayCardComponent', () => {
  let component: PlayCardComponent;
  let fixture: ComponentFixture<PlayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
