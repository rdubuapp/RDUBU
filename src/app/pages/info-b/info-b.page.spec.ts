import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBPage } from './info-b.page';

describe('InfoBPage', () => {
  let component: InfoBPage;
  let fixture: ComponentFixture<InfoBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
