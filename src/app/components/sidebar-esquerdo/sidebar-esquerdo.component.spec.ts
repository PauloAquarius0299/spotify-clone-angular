import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEsquerdoComponent } from './sidebar-esquerdo.component';

describe('SidebarEsquerdoComponent', () => {
  let component: SidebarEsquerdoComponent;
  let fixture: ComponentFixture<SidebarEsquerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarEsquerdoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
