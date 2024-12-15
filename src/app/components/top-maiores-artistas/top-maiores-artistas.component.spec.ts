import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMaioresArtistasComponent } from './top-maiores-artistas.component';

describe('TopMaioresArtistasComponent', () => {
  let component: TopMaioresArtistasComponent;
  let fixture: ComponentFixture<TopMaioresArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMaioresArtistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMaioresArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
