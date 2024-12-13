import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScrollComponent } from './user-scroll.component';

describe('UserScrollComponent', () => {
  let component: UserScrollComponent;
  let fixture: ComponentFixture<UserScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
