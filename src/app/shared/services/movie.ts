import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  private apiKey = '368ee4001a9ead5e59a59319dd1356d6';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getSearchResults(search: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${search}`);
  }

  getHome(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}`);
  }

  getNowPlaying(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`
    );
  }
  getTrendingMovies(time_window: 'day' | 'week' = 'day'): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/trending/movie/${time_window}?api_key=${this.apiKey}`
    );
  }

  getPopularMovies(page: number = 1): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`
    );
  }

  getTopRatedMovies(page: number = 1): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=${page}`
    );
  }

  getUpcomingMovies(page: number = 1): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=${page}`
    );
  }

  getNowPlayingMovies(page: number = 1): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${page}`
    );
  }
}
