import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTopicsPage } from './my-topics.page';

describe('MyTopicsPage', () => {
  let component: MyTopicsPage;
  let fixture: ComponentFixture<MyTopicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTopicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
