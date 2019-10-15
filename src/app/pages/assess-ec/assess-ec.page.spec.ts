import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessEcPage } from './assess-ec.page';

describe('AssessEcPage', () => {
  let component: AssessEcPage;
  let fixture: ComponentFixture<AssessEcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessEcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessEcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
