import { Component, Input } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [MovieCard, CommonModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  @Input() movie: any;
  isFavorite: boolean = false;
  fillStar: number[] = [1, 2, 3, 4];
  emptyStar: number[] = [1];
  constructor() {}
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
