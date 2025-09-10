// import { Component, Input, OnInit } from '@angular/core';
// import { MovieModel, MovieApiResponse } from '../../models/move';
// import { Movie } from '../../shared/services/movie';

// @Component({
//   selector: 'app-movie-pagination',
//   templateUrl: './movie-pagination.component.html',
//   styleUrls: ['./movie-pagination.component.css']
// })
// export class MoviePaginationComponent implements OnInit {
//   @Input() sectionType: 'trending' | 'popular' | 'topRated' | 'upcoming' = 'popular';

//   movies: Movie[] = [];
//   currentPage = 1;
//   totalPages = 0;

//   constructor(private movieService: Movie) {}

//   ngOnInit(): void {
//     this.loadMovies(this.currentPage);
//   }

//   loadMovies(page: number) {
//     switch (this.sectionType) {
//       case 'trending':
//         this.movieService.getTrendingMovies('day').subscribe((res: MovieApiResponse) => {
//           this.movies = res.results;
//           this.totalPages = res.total_pages;
//         });
//         break;
//       case 'popular':
//         this.movieService.getPopularMovies(page).subscribe((res: MovieApiResponse) => {
//           this.movies = res.results;
//           this.totalPages = res.total_pages;
//         });
//         break;
//       case 'topRated':
//         this.movieService.getTopRatedMovies(page).subscribe((res: MovieApiResponse) => {
//           this.movies = res.results;
//           this.totalPages = res.total_pages;
//         });
//         break;
//       case 'upcoming':
//         this.movieService.getUpcomingMovies(page).subscribe((res: MovieApiResponse) => {
//           this.movies = res.results;
//           this.totalPages = res.total_pages;
//         });
//         break;
//     }
//   }

//   nextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       this.loadMovies(this.currentPage);
//     }
//   }

//   prevPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.loadMovies(this.currentPage);
//     }
//   }
// }
