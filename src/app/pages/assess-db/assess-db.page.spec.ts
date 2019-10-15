import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessDbPage } from './assess-db.page';

describe('AssessDbPage', () => {
  let component: AssessDbPage;
  let fixture: ComponentFixture<AssessDbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessDbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessDbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
