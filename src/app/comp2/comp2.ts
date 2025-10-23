import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../service/dataservice';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css'
})
export class Comp2 implements OnInit{
  inputText : string = ''; 
  constructor(private dataservice: Dataservice){}

  ngOnInit(): void {
    this.dataservice.dataEmiter.subscribe((value)=>{
      this.inputText= value;

    })
  }

  
}
