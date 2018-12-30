import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiredPeoplePage } from './admired-people.page';

describe('AdmiredPeoplePage', () => {
  let component: AdmiredPeoplePage;
  let fixture: ComponentFixture<AdmiredPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiredPeoplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiredPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
