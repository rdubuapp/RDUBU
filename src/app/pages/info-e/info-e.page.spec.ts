import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEPage } from './info-e.page';

describe('InfoEPage', () => {
  let component: InfoEPage;
  let fixture: ComponentFixture<InfoEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
