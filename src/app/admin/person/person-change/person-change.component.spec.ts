import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonChangeComponent } from './person-change.component';

describe('PersonChangeComponent', () => {
  let component: PersonChangeComponent;
  let fixture: ComponentFixture<PersonChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
