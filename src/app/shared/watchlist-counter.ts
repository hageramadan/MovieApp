import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistCounter {
  private countSubject = new BehaviorSubject<number>(0)
  count$ = this.countSubject.asObservable()

  setCount(count: number) {
    this.countSubject.next(count)
  }

  increment() {
    this.countSubject.next(this.countSubject.value + 1);
  }

  decrement() {
    this.countSubject.next(Math.max(0, this.countSubject.value - 1));
  }
} 
