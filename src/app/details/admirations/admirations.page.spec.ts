import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmirationsPage } from './admirations.page';

describe('AdmirationsPage', () => {
  let component: AdmirationsPage;
  let fixture: ComponentFixture<AdmirationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmirationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmirationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
