import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {

  dataEmiter= new Subject<string>()

  raiseData(data: string){
    this.dataEmiter.next(data)
  }
  
}
