import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatementPage } from './account-statement.page';

describe('AccountStatementPage', () => {
  let component: AccountStatementPage;
  let fixture: ComponentFixture<AccountStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
