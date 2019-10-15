import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestPage } from './suggest.page';

describe('SuggestPage', () => {
  let component: SuggestPage;
  let fixture: ComponentFixture<SuggestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
