import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessBbPage } from './assess-bb.page';

describe('AssessBbPage', () => {
  let component: AssessBbPage;
  let fixture: ComponentFixture<AssessBbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessBbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessBbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
