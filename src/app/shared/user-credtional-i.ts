import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCredtionalI {
  private _sessionId:string|null = null
  private _accountId:string|null = null

  set sessionId (newSessionId:string)
  {
    this._sessionId = newSessionId
  }

  set accountId (newAccountId:string)
  {
    this._accountId = newAccountId
  }

  get sessionId():string | null
  {
    return this._sessionId
  }

  get accountId ():string|null
  {
    return this._accountId
  }
}
