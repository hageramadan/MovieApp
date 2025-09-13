import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WatchlistI } from '../../models/watchlist-i';
import { getStarArray, calculateStars } from '../../utils/star-calculator';
import { Watchlist } from '../../shared/watchlist';
import { UserCredtionalI } from '../../shared/user-credtional-i';
import { Subscription, combineLatest } from 'rxjs';
import { RouterLink, Router } from '@angular/router';
import { WatchlistCounter } from '../../shared/watchlist-counter';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.css'],
})
export class Wishlist implements OnInit, OnDestroy {
  private credentialsSubscription?: Subscription;

  baseBosterUrl: string = 'https://image.tmdb.org/t/p/w185/';
  movies: WatchlistI[] = [];
  isLoading = true;
  isFavorite: boolean = false;
  constructor(
    private watchlistHttpClient: Watchlist,
    private userCredtional: UserCredtionalI,
    private router: Router,
    private counterService: WatchlistCounter
  ) {}

  heartTrigger2(movie: any) {
  movie.isFavorite = !movie.isFavorite;
}

  ngOnInit(): void {
    // متابعة التغيرات في الـ credentials
    this.credentialsSubscription = combineLatest([
      this.userCredtional.accountId$,
      this.userCredtional.sessionId$,
    ]).subscribe(([accountId, sessionId]) => {
      if (accountId && sessionId) {
        this.loadWatchlist();
      } else {
        this.isLoading = false;
      }
    });
  }

  loadWatchlist(): void {
    const accountId = this.userCredtional.currentAccountId;
    const sessionId = this.userCredtional.currentSessionId;

    if (accountId && sessionId) {
      this.isLoading = true;
      this.watchlistHttpClient.getWatchlist(accountId, sessionId, 1).subscribe({
        next: (response) => {
         
          this.movies = response.results;
          this.counterService.setCount(this.movies.length);
          this.isLoading = false;
        },
        error: (error) => {
          
          this.isLoading = false;
        },
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
          if (response.success) {
            const index = this.movies.findIndex((m) => m.id === movie.id);
            if (index !== -1) {
              this.movies.splice(index, 1);
              this.counterService.decrement();
            }
          }
        });
    }
  }

  navigatetoMovieDetails(movieId: number) {
    this.router.navigate([`/movie/${movieId}`]);
  }

  ngOnDestroy(): void {
    this.credentialsSubscription?.unsubscribe();
  }
}
