import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieCard } from '../movie-card/movie-card';
import { Movie } from '../../shared/services/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from "../movie-pagination/movie-pagination";

@Component({
  selector: 'app-search',
  imports: [FormsModule, MovieCard, PaginationComponent],
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
})
export class Search {
  searchQuery: string = '';
  searchedQuery: string = '';
  searchResult: any[] = [];

  currentPage: number = 1;
  pageSize: number = 20;
  totalResults: number = 0;
  totalPages: number = 0;

  constructor(private movieService: Movie, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['q']) {
        this.searchQuery = params['q'];
        this.currentPage = params['page'] ? +params['page'] : 1; // قراءة رقم الصفحة من URL
        this.search(this.currentPage);
      }
    });
  }

  search(page: number = 1) {
    if (!this.searchQuery.trim()) return;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.searchQuery, page },
      queryParamsHandling: 'merge',
    });

    this.searchedQuery = this.searchQuery;

    this.movieService
      .getSearchResults(this.searchQuery, page) // لازم يدعم page
      .subscribe((res: any) => {
        this.searchResult = res.results;
        this.totalResults = res.total_results;
        this.totalPages = Math.ceil(this.totalResults / this.pageSize);
        this.currentPage = page;
      });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.search(page);
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
}

