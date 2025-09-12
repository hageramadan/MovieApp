import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Watchlist {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.themoviedb.org/3';
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTY1MjgzZGM3ZTgzZTUwZWExODFlNzMyOWM5Njg1NCIsIm5iZiI6MTc1NzM1Mjc0My4zNzIsInN1YiI6IjY4YmYxMzI3ZjIzZDNlMzIwMzk0N2U5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OW9ZYw51x1uG-Ui7h-W7xfgxBS3wXcVAe8mFJOIzETs';
  getWatchlist(accountId: string, sessionId: string, page: number = 1): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    });
    // https://api.themoviedb.org/3/account/22295239/watchlist/movies?language=en-US&page=1&session_id=96c319316580e13570710c02cf3577792085d514&sort_by=created_at.asc
    const url = `${this.apiUrl}/account/${accountId}/watchlist/movies?language=en-US&page=${page}&sort_by=created_at.asc&session_id=${sessionId}`;

    return this.http.get(url, { headers });
  }

  addtoWatchList(
    media_type: string = 'movie',
    media_id: number,
    accountId: string,
    sessionId: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    });

    const body = {
      media_type,
      media_id,
      watchlist: true,
    };

    const url = `${this.apiUrl}/account/${accountId}/watchlist?session_id=${sessionId}`;
    return this.http.post(url, body, { headers: headers });
  }


  removefromWatchList(
    media_type: string = 'movie',
    media_id: number,
    accountId: string,
    sessionId: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    });

    const body = {
      media_type,
      media_id,
      watchlist: false,
    };

    const url = `${this.apiUrl}/account/${accountId}/watchlist?session_id=${sessionId}`;
    return this.http.post(url, body, { headers: headers });
  }
}