import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanswerDetailPage } from './listanswer-detail.page';

describe('ListanswerDetailPage', () => {
  let component: ListanswerDetailPage;
  let fixture: ComponentFixture<ListanswerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListanswerDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanswerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
