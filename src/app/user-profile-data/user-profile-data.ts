import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UserBehaviourSubject } from '../service/user-behaviour-subject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-data',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './user-profile-data.html',
  styleUrl: './user-profile-data.css',
})
export class UserProfileData implements OnInit{
  formgroup!: FormGroup;
  
  constructor(
    private dataservice: UserBehaviourSubject,
    private fb: FormBuilder,
  ) {}
  

  ngOnInit() {
    this.formgroup = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      description:['', Validators.required],
    });

    this.formgroup.valueChanges.subscribe(value=>{
       this.dataservice.setUserData(value);

    })
  }
  // onSubmit() {
  //   this.dataservice.setUserData(this.formgroup.value);
  //   console.log(this.formgroup.value);
  //   // this.router.navigate(['/user-profile-info'])
  // }
}
