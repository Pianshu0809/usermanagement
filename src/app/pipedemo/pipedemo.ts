import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipedemo',
  imports: [CurrencyPipe,DatePipe,TitleCasePipe,UpperCasePipe,CommonModule],
  templateUrl: './pipedemo.html',
  styleUrl: './pipedemo.css'
})
export class Pipedemo {
 amount=132.58;
 company= 'Guuci';
 purchasedOn= '2025-11-10'

 output='';
 show(value:string){
  this.output=value;
 }
}
