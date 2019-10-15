import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessDaPage } from './assess-da.page';

describe('AssessDaPage', () => {
  let component: AssessDaPage;
  let fixture: ComponentFixture<AssessDaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessDaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessDaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
