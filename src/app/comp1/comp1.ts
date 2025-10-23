import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dataservice } from '../service/dataservice';

@Component({
  selector: 'app-comp1',
  imports: [FormsModule],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css'
})
export class Comp1 {

  constructor(private dataservice:Dataservice){}

  enteredText: string ='';
  onBtnClick(){
    // console.log(this.enteredText)
    this.dataservice.raiseData(this.enteredText)
  }

}
