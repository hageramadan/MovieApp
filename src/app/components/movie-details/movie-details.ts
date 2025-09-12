import { Component, OnInit } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { Movie } from '../../shared/services/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from "@angular/router";
import { UserCredtionalI } from '../../shared/user-credtional-i';
import { Watchlist } from '../../shared/watchlist';
import { WatchlistCounter } from '../../shared/watchlist-counter';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-details',
  imports: [MovieCard, CommonModule, RouterLink],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  movies: any[] = [];  
  movie: any;         
    isFavorite: boolean = false;


  fillStar: number[] = [];
  emptyStar: number[] = [];
  halfStar: boolean = false;

  isLoading: boolean = true;

  isPosterLoaded: boolean = false;
  isPosterError: boolean = false;
  loading: boolean = false;
  showNotFound: boolean = false;

  constructor(
    private movieService: Movie,
    private route: ActivatedRoute ,
  private snackBar: MatSnackBar,
    private router: Router,
    private watchListService: Watchlist,
    private user: UserCredtionalI,
    private counterService: WatchlistCounter
    
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadMovie(+id);
      }
    });
  }

  loadMovie(id: number) {
    this.loading = true;
    this.movie = null;
    this.showNotFound = false;
    this.isLoading = true; 
    this.movieService.getMovieDetails(id).subscribe({
      next: (res: any) => {
        this.movie = res;
           this.loading = false;
        if (this.movie?.vote_average) {
          const stars = this.movie.vote_average / 2;
          const full = Math.floor(stars);
          this.halfStar = stars % 1 >= 0.5;

          this.fillStar = Array(full).fill(0);
          this.emptyStar = Array(5 - full - (this.halfStar ? 1 : 0)).fill(0);
        }

        this.isLoading = false; 
 this.checkIfInWatchlist();

      },
      error: () => {
        this.isLoading = false;
        setTimeout(() => {
          this.showNotFound = true;
        }, 50);
      }
    });

    this.movieService.getRecommendations(id).subscribe((res: any) => {
      this.movies = res.results;
    });
  }

  getPoster(movie: any) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  // فتح موقع الفيلم الرسمي
  openWebsite(url: string) {
    window.open(url, '_blank');
  }

  onPosterLoad() {
    this.isPosterLoaded = true;
  }

  onPosterError() {
    this.isPosterError = true;
  }
  toggleFavorite() {
    if (!this.movie) return;

    this.isFavorite = !this.isFavorite;

    const accountId = this.user.currentAccountId;
    const sessionId = this.user.currentSessionId;
    const mediaType = 'movie';

    if (this.isFavorite) {
      this.watchListService
        .addtoWatchList(mediaType, this.movie.id, <string>accountId, <string>sessionId)
        .subscribe({
          next: () => {
            this.openSnackBar('Added to watchlist'), this.counterService.increment();
          },
          error: (err) => console.error('Error adding:', err),
        });
    } else {
      this.watchListService
        .removefromWatchList(mediaType, this.movie.id, <string>accountId, <string>sessionId)
        .subscribe({
          next: () => {
            this.openSnackBar('Removed from watchlist'), this.counterService.decrement();
          },
          error: (err) => console.error('Error removing:', err),
        });
    }
  }
    openSnackBar(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000, // مدة الظهور بالمللي ثانية
      horizontalPosition: 'right', // start | center | end | left | right
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'], // top | bottom
    });
  }
  checkIfInWatchlist() {
    const accountId = this.user.currentAccountId;
    const sessionId = this.user.currentSessionId;

    if (this.movie && accountId && sessionId) {
      this.watchListService.getWatchlist(accountId, sessionId, 1).subscribe((res: any) => {
        const exists = res.results.some((item: any) => item.id === this.movie?.id);
        this.isFavorite = exists;
      });
    }
  }
}
