import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMusicasComponent } from './lista-musicas.component';

describe('ListaMusicasComponent', () => {
  let component: ListaMusicasComponent;
  let fixture: ComponentFixture<ListaMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
