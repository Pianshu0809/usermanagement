import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css']
})
export class Parent implements AfterViewInit {

  messageForChild: string = 'Hey, this is parent component';
  messageFromChild: string = '';

  handleChildEvent(message: string) {
    this.messageFromChild = message;
    alert(message);
  }

  @ViewChild(Child) child!: Child;

  ngAfterViewInit() {
    alert(this.child.message); 
  }
  

  callChild() {
    alert(this.child.greet()); 
  }
}
