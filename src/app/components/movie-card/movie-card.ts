import { DatePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Watchlist } from '../../shared/watchlist';
import { UserCredtionalI } from '../../shared/user-credtional-i';
import { RatingCircle } from '../rating-circle/rating-circle';
import { Movie } from '../../shared/services/movie';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, NgClass, RatingCircle],
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
    private user: UserCredtionalI ,
    private movieService: Movie
  ) {}
  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  movieRatingPercent(movie: any) {
    return Math.round(movie.vote_average * 10);
  }

  toggleFavorite() {
    if (!this.movie) return;

    this.isFavorite = !this.isFavorite;

    const accountId = this.user.currentAccountId;
    const sessionId = this.user.currentSessionId;
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
  details(id: number) {
    this.router.navigate(['/movie', id]);
  }
}
