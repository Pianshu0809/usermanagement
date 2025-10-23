import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Countapp {
  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  Increment() {
    this.count.next(this.count.value + 1);
  }

  Decrement() {
    this.count.next(this.count.value - 1);
  }

  Reset() {
    this.count.next(0);
  }

}
