
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCard } from "../movie-card/movie-card";
import { Movie } from '../../shared/services/movie';
import { PaginationComponent } from "../movie-pagination/movie-pagination";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbModule, MovieCard, PaginationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  movies: any = {
    trending: { data: [], page: 1, totalPages: 0 },
    popular: { data: [], page: 1, totalPages: 0 },
    topRated: { data: [], page: 1, totalPages: 0 },
    upcoming: { data: [], page: 1, totalPages: 0 }
  };

  constructor(private movieService: Movie) {}

  ngOnInit(): void {
    this.loadMovies('trending', 1);
    this.loadMovies('popular', 1);
    this.loadMovies('topRated', 1);
    this.loadMovies('upcoming', 1);
  }

  loadMovies(category: string, page: number): void {
    let request$;

    switch (category) {
      case 'trending':
        request$ = this.movieService.getTrendingMovies( page);
        break;
      case 'popular':
        request$ = this.movieService.getPopularMovies(page);
        break;
      case 'topRated':
        request$ = this.movieService.getTopRatedMovies(page);
        break;
      case 'upcoming':
        request$ = this.movieService.getUpcomingMovies(page);
        break;
      default:
        return;
    }

    request$.subscribe(data => {
      this.movies[category].data = data.results;
      this.movies[category].page = data.page;
      this.movies[category].totalPages = data.total_pages;
    });
  }

  onPageChange(category: string, page: number): void {
    this.loadMovies(category, page);
  }
}


