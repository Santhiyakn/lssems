import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCategoriesListComponent } from './user-categories-list.component';

describe('UserCategoriesListComponent', () => {
  let component: UserCategoriesListComponent;
  let fixture: ComponentFixture<UserCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCategoriesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
