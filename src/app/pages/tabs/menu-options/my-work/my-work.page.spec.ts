import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkPage } from './my-work.page';

describe('MyWorkPage', () => {
  let component: MyWorkPage;
  let fixture: ComponentFixture<MyWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
