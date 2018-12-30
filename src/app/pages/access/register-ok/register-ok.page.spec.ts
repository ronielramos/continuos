import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOkPage } from './register-ok.page';

describe('RegisterOkPage', () => {
  let component: RegisterOkPage;
  let fixture: ComponentFixture<RegisterOkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
