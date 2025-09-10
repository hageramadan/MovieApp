import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private snackBar: MatSnackBar, private router: Router) {}
  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  openSnackBar() {
    this.snackBar.open('Saved to watchlist', 'X', {
      duration: 3000, // مدة الظهور بالمللي ثانية
      horizontalPosition: 'right', // start | center | end | left | right
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'], // top | bottom
    });
  }
}
