import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, DecimalPipe, NgClass],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() movie: any;
  isFavorite: boolean = false;

  constructor(private router: Router) {}

  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
