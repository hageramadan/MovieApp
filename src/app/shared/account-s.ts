import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AccountDetailsI } from '../models/account-details-i';
import { UserCredtionalI } from './user-credtional-i';

@Injectable({
  providedIn: 'root',
})
export class AccountS {
  private apiUrl = 'https://api.themoviedb.org/3';
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTY1MjgzZGM3ZTgzZTUwZWExODFlNzMyOWM5Njg1NCIsIm5iZiI6MTc1NzM1Mjc0My4zNzIsInN1YiI6IjY4YmYxMzI3ZjIzZDNlMzIwMzk0N2U5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OW9ZYw51x1uG-Ui7h-W7xfgxBS3wXcVAe8mFJOIzETs';

  constructor(private http: HttpClient, private userCredtional: UserCredtionalI) {}

  getAccountDetails(): Observable<AccountDetailsI | null> {
    return combineLatest([
      this.userCredtional.accountId$,
      this.userCredtional.sessionId$
    ]).pipe(
      switchMap(([accountId, sessionId]) => {
        if (accountId && sessionId) {
          const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            Accept: 'application/json',
          });
          const url = `${this.apiUrl}/account/${accountId}?session_id=${sessionId}`;
          return this.http.get<AccountDetailsI>(url, { headers }).pipe(
            catchError(error => {
              console.error('Error fetching account details:', error);
              return of(null); // Return null on error
            })
          );
        } else {
          console.log('Missing credentials:', { accountId, sessionId });
          return of(null); // Return null if credentials are missing
        }
      })
    );
  }
}
