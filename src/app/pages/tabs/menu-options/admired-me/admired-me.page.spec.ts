import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiredMePage } from './admired-me.page';

describe('AdmiredMePage', () => {
  let component: AdmiredMePage;
  let fixture: ComponentFixture<AdmiredMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiredMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiredMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
