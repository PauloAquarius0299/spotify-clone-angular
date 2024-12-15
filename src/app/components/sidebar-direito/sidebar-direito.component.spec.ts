import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDireitoComponent } from './sidebar-direito.component';

describe('SidebarDireitoComponent', () => {
  let component: SidebarDireitoComponent;
  let fixture: ComponentFixture<SidebarDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarDireitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
