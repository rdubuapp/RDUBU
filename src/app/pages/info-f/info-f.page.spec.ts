import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFPage } from './info-f.page';

describe('InfoFPage', () => {
  let component: InfoFPage;
  let fixture: ComponentFixture<InfoFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
