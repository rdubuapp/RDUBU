import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanswerPage } from './listanswer.page';

describe('ListanswerPage', () => {
  let component: ListanswerPage;
  let fixture: ComponentFixture<ListanswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListanswerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
