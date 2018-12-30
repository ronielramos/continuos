import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedPeoplePage } from './blocked-people.page';

describe('BlockedPeoplePage', () => {
  let component: BlockedPeoplePage;
  let fixture: ComponentFixture<BlockedPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedPeoplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
