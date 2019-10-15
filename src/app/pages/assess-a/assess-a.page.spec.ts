import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessAPage } from './assess-a.page';

describe('AssessAPage', () => {
  let component: AssessAPage;
  let fixture: ComponentFixture<AssessAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
