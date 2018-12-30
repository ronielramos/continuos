import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelationPage } from './delation.page';

describe('DelationPage', () => {
  let component: DelationPage;
  let fixture: ComponentFixture<DelationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
