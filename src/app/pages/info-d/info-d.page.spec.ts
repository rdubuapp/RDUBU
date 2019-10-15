import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDPage } from './info-d.page';

describe('InfoDPage', () => {
  let component: InfoDPage;
  let fixture: ComponentFixture<InfoDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
