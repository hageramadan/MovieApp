import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WatchlistI } from '../../models/watchlist-i';
import { getStarArray, calculateStars } from '../../utils/star-calculator';
import { Watchlist } from '../../shared/watchlist';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  constructor(public watchlistHttpClient: Watchlist) {}
  baseBosterUrl: string = 'https://image.tmdb.org/t/p/w185/';
  movies: WatchlistI[] = [];
  // Helper methods for star calculation


  ngOnInit(): void {
    this.watchlistHttpClient
      .getWatchlist('22295239', '96c319316580e13570710c02cf3577792085d514', 1)
      .subscribe((responce) => {
        console.log(responce);
        this.movies = responce.results;
      });
  }


  getStarArray(voteAverage: number): string[] {
    return getStarArray(voteAverage);
  }

  getStarRating(voteAverage: number) {
    return calculateStars(voteAverage);
  }
}
