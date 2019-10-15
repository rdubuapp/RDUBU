import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessEbPage } from './assess-eb.page';

describe('AssessEbPage', () => {
  let component: AssessEbPage;
  let fixture: ComponentFixture<AssessEbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessEbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessEbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
