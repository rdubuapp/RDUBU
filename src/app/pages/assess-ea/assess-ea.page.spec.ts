import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessEaPage } from './assess-ea.page';

describe('AssessEaPage', () => {
  let component: AssessEaPage;
  let fixture: ComponentFixture<AssessEaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessEaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessEaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
