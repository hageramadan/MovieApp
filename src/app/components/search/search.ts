import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieCard } from '../movie-card/movie-card';
import { Movie } from '../../shared/services/movie';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private movieService: Movie, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['q']) {
        this.searchQuery = params['q'];
        this.search();
      }
    });
  }

  search() {
    if (!this.searchQuery.trim()) return;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.searchQuery },
      queryParamsHandling: 'merge',
    });

    this.searchedQuery = this.searchQuery;

    this.movieService
      .getSearchResults(this.searchQuery)
      .subscribe((res: any) => (this.searchResult = res.results));
  }
}
