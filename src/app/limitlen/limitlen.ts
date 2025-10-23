import { Component } from '@angular/core';
import { LengthlimitDirective } from '../directives/lengthlimit';


@Component({
  selector: 'app-limitlen',
  imports: [LengthlimitDirective],
  templateUrl: './limitlen.html',
  styleUrl: './limitlen.css'
})
export class Limitlen {
  longSentence = 'This is a very long text that will be truncated using the directive.';


}
