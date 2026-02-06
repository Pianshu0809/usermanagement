import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {


  user = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,15}$')
    ]),
    rememberMe: new FormControl(false)
  });

  submitted = false;
  showPassword = false;

  constructor(private router: Router) {}

  ngOnInit() {
  const savedEmail = sessionStorage.getItem('email');
  const savedPassword = sessionStorage.getItem('password');

  if (savedEmail || savedPassword) {
    this.user.patchValue({
      email: savedEmail,
      rememberMe: true
    });
  }
}


  get email() {
    return this.user.get('email');
  }

  get password() {
    return this.user.get('password');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
  this.submitted = true;

  if (this.user.invalid) return;

  const remember = this.user.value.rememberMe;

  if (remember) {
    sessionStorage.setItem('email', this.user.value.email!);
    sessionStorage.setItem('password', this.user.value.password!);
  } else {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
  }

  this.router.navigate(['/profileinformation']);
}


}



