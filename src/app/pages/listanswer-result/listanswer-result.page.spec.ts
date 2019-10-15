import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanswerResultPage } from './listanswer-result.page';

describe('ListanswerResultPage', () => {
  let component: ListanswerResultPage;
  let fixture: ComponentFixture<ListanswerResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListanswerResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanswerResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
