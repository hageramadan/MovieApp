import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // السيرفس متاح في كل الابلكيشن
})
export class MovieService {

  private apiKey = '368ee4001a9ead5e59a59319dd1356d6';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

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

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}`
    );
  }

 
  getMovieDetails(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
}
