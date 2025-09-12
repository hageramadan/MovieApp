import { TestBed } from '@angular/core/testing';

import { WatchlistCounter } from './watchlist-counter';

describe('WatchlistCounter', () => {
  let service: WatchlistCounter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchlistCounter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
