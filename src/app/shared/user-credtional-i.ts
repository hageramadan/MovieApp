import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCredtionalI {
  private _sessionId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private _accountId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  set sessionId(newSessionId: string) {
    this._sessionId.next(newSessionId);
    localStorage.setItem('tmdb_session_id', newSessionId);
  }

  set accountId(newAccountId: string) {
    this._accountId.next(newAccountId);
    localStorage.setItem('tmdb_account_id', newAccountId); // Persist accountId
  }

  get sessionId$() {
    return this._sessionId.asObservable();
  }

  get accountId$() {
    return this._accountId.asObservable();
  }

  get currentSessionId(): string | null {
    return this._sessionId.getValue();
  }

  get currentAccountId(): string | null {
    return this._accountId.getValue();
  }

  // Initialize from localStorage if available
  initializeFromStorage() {
    const savedSessionId = localStorage.getItem('tmdb_session_id');
    const savedAccountId = localStorage.getItem('tmdb_account_id');
    if (savedSessionId) {
      this._sessionId.next(savedSessionId);
    }
    if (savedAccountId) {
      this._accountId.next(savedAccountId);
    }
  }

  // Optional: Clear credentials on logout
  clearCredentials() {
    this._sessionId.next(null);
    this._accountId.next(null);
    localStorage.removeItem('tmdb_session_id');
    localStorage.removeItem('tmdb_account_id');
  }
}
