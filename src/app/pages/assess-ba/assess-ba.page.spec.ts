import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessBaPage } from './assess-ba.page';

describe('AssessBaPage', () => {
  let component: AssessBaPage;
  let fixture: ComponentFixture<AssessBaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessBaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessBaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
