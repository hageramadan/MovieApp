import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MovieCard } from "../movie-card/movie-card";
import { Movie } from '../../shared/services/movie';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbModule, MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  upcomingMovies: any[] = [];

  constructor(private Movie: Movie) {}

  ngOnInit(): void {
    // Trending
    this.Movie.getTrendingMovies('day').subscribe(data => {
      this.trendingMovies = data.results;
    });

    // Popular
    this.Movie.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;
    });

    // Top Rated
    this.Movie.getTopRatedMovies().subscribe(data => {
      this.topRatedMovies = data.results;
    });

    // Upcoming
    this.Movie.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data.results;
    });
    
  }
 
}
