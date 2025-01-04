import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersideNavComponent } from './userside-nav.component';

describe('UsersideNavComponent', () => {
  let component: UsersideNavComponent;
  let fixture: ComponentFixture<UsersideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
