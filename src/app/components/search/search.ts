import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-search',
  imports: [MovieCard],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {}
