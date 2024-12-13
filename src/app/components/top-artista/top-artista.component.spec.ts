import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistaComponent } from './top-artista.component';

describe('TopArtistaComponent', () => {
  let component: TopArtistaComponent;
  let fixture: ComponentFixture<TopArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopArtistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
