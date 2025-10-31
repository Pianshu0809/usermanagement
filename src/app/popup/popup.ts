import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  imports: [ReactiveFormsModule, MatDialogModule, CommonModule],
  templateUrl: './popup.html',
  styleUrl: './popup.css'
})
export class Popup {
  formdata = new FormGroup({
    fn: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    ln: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    mn: new FormControl('', [Validators.pattern('^[A-Za-z ]*$')]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(120), Validators.pattern('^[0-9]+$')]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    username: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9_]{3,15}$')]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)
    ]),
    birthdate: new FormControl('', [Validators.required]),
    userimage: new FormControl(null, [Validators.required]),
    bloodgroup: new FormControl('', [Validators.required, Validators.pattern(/^(A|B|AB|O)[+-]$/)]),
    height: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    weight: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    eyecolor: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),

    hair: new FormGroup({
      color: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      type: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')])
    }),

     ipaddress: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      )
    ]),

    address: new FormGroup({
      housenumber: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s,.'-]{3,}$/)]),
      city: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,}$/)]),
      state: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,}$/)]),
      statecode: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{2,}$/)]),
      postalcode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{5,6}$/)]),

      coordinates: new FormGroup({
        lat: new FormControl('', [Validators.required, Validators.pattern(/^[-+]?[0-9]*\.?[0-9]+$/)]),
        long: new FormControl('', [Validators.required, Validators.pattern(/^[-+]?[0-9]*\.?[0-9]+$/)])
      }),

      country: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,}$/)])
    })
  });

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formdata.get('userimage')?.setValue(file);
    }
  }

  onSubmit() {
    if (this.formdata.valid) {
      console.log('Form Data:', this.formdata.value);
      alert('Form submitted successfully!');
    } else {
      this.formdata.markAllAsTouched();
      alert('Please fill all required fields correctly.');
    }
  }
}


