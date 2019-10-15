import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessCbPage } from './assess-cb.page';

describe('AssessCbPage', () => {
  let component: AssessCbPage;
  let fixture: ComponentFixture<AssessCbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessCbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessCbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
