import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WatchlistI } from '../../models/watchlist-i';
import { getStarArray, calculateStars } from '../../utils/star-calculator';
import { Watchlist } from '../../shared/watchlist';
import { UserCredtionalI } from '../../shared/user-credtional-i';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  constructor(public watchlistHttpClient: Watchlist, public userCredtional: UserCredtionalI) {}
  baseBosterUrl: string = 'https://image.tmdb.org/t/p/w185/';
  movies: WatchlistI[] = [];
  // Helper methods for star calculation

  ngOnInit(): void {
    // this.userCredtional.accountId = '22295239';
    // this.userCredtional.sessionId = '96c319316580e13570710c02cf3577792085d514';
    this.watchlistHttpClient
      .getWatchlist(<string>this.userCredtional.accountId, <string>this.userCredtional.sessionId, 1)
      .subscribe((responce) => {
        console.log({
          responce,
          accountId: this.userCredtional.accountId,
          sessionID: this.userCredtional.sessionId,
        });
        this.movies = responce.results;
      });
  }

  getStarArray(voteAverage: number): string[] {
    return getStarArray(voteAverage);
  }

  getStarRating(voteAverage: number) {
    return calculateStars(voteAverage);
  }

  heartTrigger(movie: WatchlistI) {
    // console.log(movie)
    this.watchlistHttpClient
      .removefromWatchList(
        'movie',
        movie.id,
        <string>this.userCredtional.accountId,
        <string>this.userCredtional.sessionId
      )
      .subscribe((responce) => {
        if (responce.success == true) {
          const index = this.movies.findIndex((searchMovie) => searchMovie.id === movie.id);
          if (index !== -1) {
            this.movies.splice(index, 1);
          }
        }
      });
  }
}
