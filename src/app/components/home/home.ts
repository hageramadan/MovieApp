import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../shared/movies';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  trendingMovies: any[] = [];
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  upcomingMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // Trending
    this.movieService.getTrendingMovies('day').subscribe(data => {
      this.trendingMovies = data.results;
    });

    // Popular
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;
    });

    // Top Rated
    this.movieService.getTopRatedMovies().subscribe(data => {
      this.topRatedMovies = data.results;
    });

    // Upcoming
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data.results;
    });
    
  }
  getSlides(movies: any[], perSlide: number = 4) {
  const slides = [];
  for (let i = 0; i < movies.length; i += perSlide) {
    slides.push(movies.slice(i, i + perSlide));
  }
  return slides;
}
}
