import { TestBed } from '@angular/core/testing';

import { AccountS } from './account-s';

describe('AccountS', () => {
  let service: AccountS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
