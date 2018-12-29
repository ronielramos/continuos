import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFirstTimePage } from './login-first-time.page';

describe('LoginFirstTimePage', () => {
  let component: LoginFirstTimePage;
  let fixture: ComponentFixture<LoginFirstTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFirstTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFirstTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
