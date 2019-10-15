import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAPage } from './info-a.page';

describe('InfoAPage', () => {
  let component: InfoAPage;
  let fixture: ComponentFixture<InfoAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
