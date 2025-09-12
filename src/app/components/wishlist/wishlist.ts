import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WatchlistI } from '../../models/watchlist-i';
import { getStarArray, calculateStars } from '../../utils/star-calculator';
import { Watchlist } from '../../shared/watchlist';
import { UserCredtionalI } from '../../shared/user-credtional-i';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist implements OnInit, OnDestroy {
  private credentialsSubscription: Subscription | null = null;

  baseBosterUrl: string = 'https://image.tmdb.org/t/p/w185/';
  movies: WatchlistI[] = [];
  isLoading: boolean = true;

  constructor(
    public watchlistHttpClient: Watchlist,
    public userCredtional: UserCredtionalI
  ) {}

  ngOnInit(): void {
    // Initialize from storage
    this.userCredtional.initializeFromStorage();

    // Subscribe to both accountId$ and sessionId$
    this.credentialsSubscription = combineLatest([
      this.userCredtional.accountId$,
      this.userCredtional.sessionId$
    ]).subscribe(([accountId, sessionId]) => {
      if (accountId && sessionId) {
        this.loadWatchlist();
      } else {
        console.log('Missing credentials:', { accountId, sessionId });
        this.isLoading = false;
      }
    });
  }

  loadWatchlist(): void {
    const accountId = this.userCredtional.currentAccountId;
    const sessionId = this.userCredtional.currentSessionId;

    if (accountId && sessionId) {
      this.isLoading = true;
      this.watchlistHttpClient
        .getWatchlist(accountId, sessionId, 1)
        .subscribe({
          next: (response) => {
            console.log({
              response,
              accountId,
              sessionId,
            });
            this.movies = response.results;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error loading watchlist:', error);
            this.isLoading = false;
          }
        });
    } else {
      this.isLoading = false;
    }
  }

  getStarArray(voteAverage: number): string[] {
    return getStarArray(voteAverage);
  }

  getStarRating(voteAverage: number) {
    return calculateStars(voteAverage);
  }

  heartTrigger(movie: WatchlistI) {
    const accountId = this.userCredtional.currentAccountId;
    const sessionId = this.userCredtional.currentSessionId;

    if (accountId && sessionId) {
      this.watchlistHttpClient
        .removefromWatchList('movie', movie.id, accountId, sessionId)
        .subscribe((response) => {
          if (response.success == true) {
            const index = this.movies.findIndex((searchMovie) => searchMovie.id === movie.id);
            if (index !== -1) {
              this.movies.splice(index, 1);
            }
          }
        });
    }
  }

  ngOnDestroy(): void {
    if (this.credentialsSubscription) {
      this.credentialsSubscription.unsubscribe();
    }
  }
}
