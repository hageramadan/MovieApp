import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieCard } from '../movie-card/movie-card';
import { Movie } from '../../shared/services/movie';

@Component({
  selector: 'app-search',
  imports: [FormsModule, MovieCard],
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
})
export class Search {
  searchQuery: string = '';
  searchedQuery: string = '';
  searchResult: any = [];
  constructor(private movieService: Movie) {}

  search() {
    this.searchedQuery = this.searchQuery;

    this.movieService
      .getSearchResults(this.searchQuery)
      .subscribe((res: any) => (this.searchResult = res.results));
  }
}
