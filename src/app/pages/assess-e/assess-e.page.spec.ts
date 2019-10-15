import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessEPage } from './assess-e.page';

describe('AssessEPage', () => {
  let component: AssessEPage;
  let fixture: ComponentFixture<AssessEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
