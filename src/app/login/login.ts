import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';

  usernameMessage: string = '';
  passwordMessage: string = '';

  isUsernameValid: boolean = false;
  isPasswordValid: boolean = false;



  usernameValidation = /^[A-Za-z]{3,}$/;
  passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,15}$/;

  validateUsername(){
    if(this.usernameValidation.test(this.username)){
      this.usernameMessage="valid";
      this.isUsernameValid = true;
    }else{
      this.usernameMessage="Invalid (only letters, 3–15 chars)";
      this.isUsernameValid = false;
    }
  }

  validatePassword(){
    if(this.passwordValidation.test(this.password)){
      this.passwordMessage="valid";
      this.isPasswordValid = true;
    }else{
      this.passwordMessage="Invalid (8–15 chars, must include A-Z, a-z, 0-9 & special)";
      this.isPasswordValid = false;
    }
  }

  constructor(private router: Router) {}
  onSubmit() {
      if (!this.username && !this.password) {
        alert('Please fill username and password');
        return;
      }
      if (!this.username) {
        alert('Please fill username');
        return;
      }
      if (!this.password) {
        alert('Please fill password');
        return;
      }

      this.validateUsername();
      this.validatePassword();

      if (this.usernameValidation.test(this.username) && this.passwordValidation.test(this.password)) {
        alert(`Login successful!\nUsername: ${this.username}\nPassword: ${this.password}`);
        
        // navigation 
        this.router.navigate(['/userinformation']);
      } else {
        alert('Please enter valid username and password!');
      }
    }


}
