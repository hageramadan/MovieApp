import { TestBed } from '@angular/core/testing';

import { UserCredtionalI } from './user-credtional-i';

describe('UserCredtionalI', () => {
  let service: UserCredtionalI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCredtionalI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
