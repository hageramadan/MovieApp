import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  private apiKey = '368ee4001a9ead5e59a59319dd1356d6';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getSearchResults(search: string): any {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${search}`);
  }

  getHome() {
    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}`);
  }
}
