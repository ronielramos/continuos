import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundItemsPage } from './found-items.page';

describe('FoundItemsPage', () => {
  let component: FoundItemsPage;
  let fixture: ComponentFixture<FoundItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
