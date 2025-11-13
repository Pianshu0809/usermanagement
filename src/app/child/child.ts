import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() parentMessage: string = '';
  @Output() event = new EventEmitter<string>();

  sendMessageToParent() {
    this.event.emit('Hello from child component!');
  }


  message='Hello From Child!';
  greet(){
    return 'hi parent Component';
  }
}
