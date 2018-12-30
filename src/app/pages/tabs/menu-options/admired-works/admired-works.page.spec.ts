import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiredWorksPage } from './admired-works.page';

describe('AdmiredWorksPage', () => {
  let component: AdmiredWorksPage;
  let fixture: ComponentFixture<AdmiredWorksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiredWorksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiredWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
