import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Watchlist } from '../../shared/watchlist';
import { UserCredtionalI } from '../../shared/user-credtional-i';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, DecimalPipe, NgClass],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() movie?: any;
  @Input() trendingMovies?: any[] = [];
  @Input() popularMovies?: any[] = [];
  @Input() topRatedMovies?: any[] = [];
  @Input() upcomingMovies?: any[] = [];

  isFavorite: boolean = false;
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private watchListService: Watchlist,
    private user: UserCredtionalI
  ) {}
  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  toggleFavorite() {
    if (!this.movie) return;

    this.isFavorite = !this.isFavorite;

    const accountId = this.user.accountId;
    const sessionId = this.user.sessionId;
    const mediaType = 'movie';

    if (this.isFavorite) {
      this.watchListService
        .addtoWatchList(mediaType, this.movie.id, <string>accountId, <string>sessionId)
        .subscribe({
          next: () => this.openSnackBar('Added to watchlist'),
          error: (err) => console.error('Error adding:', err),
        });
    } else {
      this.watchListService
        .removefromWatchList(mediaType, this.movie.id, <string>accountId, <string>sessionId)
        .subscribe({
          next: () => this.openSnackBar('Removed from watchlist'),
          error: (err) => console.error('Error removing:', err),
        });
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000, // مدة الظهور بالمللي ثانية
      horizontalPosition: 'right', // start | center | end | left | right
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'], // top | bottom
    });
  }
}
