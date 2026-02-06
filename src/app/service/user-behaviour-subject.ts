import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserBehaviourSubject {
  private userDataSubject = new BehaviorSubject<any>(null);

  // public datainfo$ : Observable<any> = this.userDataSubject.asObservable();
  public datainfo$= this.userDataSubject.asObservable();

  setUserData(data: any) {
    this.userDataSubject.next(data);
  }
  
}
