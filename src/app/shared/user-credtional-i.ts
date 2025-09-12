import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCredtionalI {
  private _sessionId$ = new BehaviorSubject<string | null>(null);
  private _accountId$ = new BehaviorSubject<string | null>(null);

  constructor() {
    this.initializeFromStorage(); // يقرأ من localStorage أول ما السيرفيس يتعمل Inject
  }

  // -------- Setters --------
  setSessionId(sessionId: string): void {
    this._sessionId$.next(sessionId);
    localStorage.setItem('tmdb_session_id', sessionId);
  }

  setAccountId(accountId: string): void {
    this._accountId$.next(accountId);
    localStorage.setItem('tmdb_account_id', accountId);
  }

  // -------- Getters --------
  get sessionId$(): Observable<string | null> {
    return this._sessionId$.asObservable();
  }

  get accountId$(): Observable<string | null> {
    return this._accountId$.asObservable();
  }

  get currentSessionId(): string | null {
    return this._sessionId$.value;
  }

  get currentAccountId(): string | null {
    return this._accountId$.value;
  }

  // -------- Storage Management --------
  private initializeFromStorage(): void {
    const savedSessionId = localStorage.getItem('tmdb_session_id');
    const savedAccountId = localStorage.getItem('tmdb_account_id');

    if (savedSessionId) this._sessionId$.next(savedSessionId);
    if (savedAccountId) this._accountId$.next(savedAccountId);
  }

  clearCredentials(): void {
    this._sessionId$.next(null);
    this._accountId$.next(null);
    localStorage.removeItem('tmdb_session_id');
    localStorage.removeItem('tmdb_account_id');
  }
}
