import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserBehaviourSubject } from '../service/user-behaviour-subject';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile-info',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-profile-info.html',
  styleUrl: './user-profile-info.css'
})
export class UserProfileInfo implements OnInit{
  datainfo$: Observable<any> = new Observable();

  constructor(private dataservice: UserBehaviourSubject){}

  ngOnInit(){
    this.datainfo$ = this.dataservice.datainfo$
  }

}