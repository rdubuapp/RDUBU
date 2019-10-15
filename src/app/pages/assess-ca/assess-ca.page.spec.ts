import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessCaPage } from './assess-ca.page';

describe('AssessCaPage', () => {
  let component: AssessCaPage;
  let fixture: ComponentFixture<AssessCaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessCaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessCaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
