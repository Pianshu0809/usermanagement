import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Userinfomation } from '../service/userinfomation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profileinformation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profileinformation.html',
  styleUrls: ['./profileinformation.css']
})
export class Profileinformation implements OnInit {
  
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    email: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    phone: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    userImage: new FormControl<string | null>(null),
    address: new FormGroup({
      street : new FormControl('',[]),
      city: new FormControl('',[]),
      state: new FormControl('',[]),
      zip: new FormControl('')
    })
  });

  previewUrl: string | ArrayBuffer | null = null;
  users: any[] = [];

  constructor(private userInfoService: Userinfomation) {}

  ngOnInit() {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      this.users = JSON.parse(savedData);
    }
  }
  onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;

      // store the base64 string in form
      this.profileForm.patchValue({ userImage: this.previewUrl });
    };
    reader.readAsDataURL(file);
  }
}


  onSubmit() {
    if (this.profileForm.valid) {
      const formData = {
        firstName: this.profileForm.get('firstName')?.value,
        lastName: this.profileForm.get('lastName')?.value,
        email:this.profileForm.get('email')?.value,
        phone:this.profileForm.get('phone')?.value,
        userImage: this.previewUrl,
        street: this.profileForm.get('address.street')?.value,
        city: this.profileForm.get('address.city')?.value,
        state: this.profileForm.get('address.state')?.value,
        zip: this.profileForm.get('address.zip')?.value
      };

      // Save in service
      this.userInfoService.setUser(formData);

      // Add to array and save in localStorage
      this.users.push(formData);
      localStorage.setItem('profileData', JSON.stringify(this.users));

      console.log('Data saved in service:', this.userInfoService.getUser());
      console.log('All data in localStorage:', this.users);

      // Optional: reset the form after submission
      this.profileForm.reset();
      this.previewUrl = null;
    } else {
      console.log('Form is invalid');
    }
  }
}
