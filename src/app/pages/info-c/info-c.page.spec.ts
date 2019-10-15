import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCPage } from './info-c.page';

describe('InfoCPage', () => {
  let component: InfoCPage;
  let fixture: ComponentFixture<InfoCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
