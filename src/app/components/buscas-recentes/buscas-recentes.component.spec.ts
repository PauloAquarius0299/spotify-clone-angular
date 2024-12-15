import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscasRecentesComponent } from './buscas-recentes.component';

describe('BuscasRecentesComponent', () => {
  let component: BuscasRecentesComponent;
  let fixture: ComponentFixture<BuscasRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscasRecentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscasRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
