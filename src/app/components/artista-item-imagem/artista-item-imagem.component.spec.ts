import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaItemImagemComponent } from './artista-item-imagem.component';

describe('ArtistaItemImagemComponent', () => {
  let component: ArtistaItemImagemComponent;
  let fixture: ComponentFixture<ArtistaItemImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistaItemImagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaItemImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
