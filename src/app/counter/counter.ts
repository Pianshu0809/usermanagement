import { Component } from '@angular/core';
import { Countapp } from '../service/countapp';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  count: number = 0;

  constructor(private counterService: Countapp) {}

  ngOnInit() {
    this.counterService.count$.subscribe((value) => {
      this.count = value;
    });
  }

  Increment() {
    this.counterService.Increment();
  }

  Decrement() {
    this.counterService.Decrement();
  }

  Reset() {
    this.counterService.Reset();
  }
 

 



}
