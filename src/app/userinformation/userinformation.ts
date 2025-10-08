import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Userinfomation} from '../service/userinfomation';


@Component({
  selector: 'app-userinformation',
  imports: [FormsModule, CommonModule],
  templateUrl: './userinformation.html',
  styleUrl: './userinformation.css'
})
export class Userinformation {
  fn: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';
  
  // event handling
  fname: string = '';
  lname: string = '';

  // local reference
  info: string = '';

  firstnamevalidation= /^[A-Za-z\s-]{1,}$/;;
  lastnamevalidation = /^[A-Za-z]{1,}$/;
  emailvalidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  phonevalidation = /^[0-9]{10}$/;
  addressvalidation = /^[A-Za-z0-9\s,.'-]{3,}$/;
  cityvalidation = /^[A-Za-z\s]{2,}$/;
  statevalidation = /^[A-Za-z\s]{2,}$/;
  zipvalidation = /^[0-9]{6}$/;

firstnameMessage: string= '';
lastnameMessage: string= '';
emailMessage: string= '';
phoneMessage: string= '';
addressMessage: string= '';
cityMessage: string= '';
stateMessage: string= '';
zipMessage: string= '';

isfirstnameValid: boolean = false;
islastnameValid: boolean = false;
isemailValid: boolean = false;
isphoneValid: boolean = false;
isaddressValid: boolean = false;
iscityValid: boolean = false;
isstateValid: boolean = false;
iszipValid: boolean = false;


  validateFirstname(){
    if(this.firstnamevalidation.test(this.fn)){
      this.firstnameMessage="valid";
      this.isfirstnameValid = true;
    }
    else{
      this.firstnameMessage="Invalid (only letters)";
      this.isfirstnameValid = false;
    }
  }

  validateLastname(){
    if(this.lastnamevalidation.test(this.lastname)){
      this.lastnameMessage="valid";
      this.islastnameValid = true;
    }
    else{
      this.lastnameMessage="Invalid (only letters)";
      this.islastnameValid = false;
    }
  }

  validateEmail(){
    if(this.emailvalidation.test(this.email)){
      this.emailMessage="valid";
      this.isemailValid = true;
    }
    else{
      this.emailMessage="Invalid";
      this.isemailValid = false;
    }}

    validatePhone(){ 
      if(this.phonevalidation.test(this.phone) && this.phone.length==10){
        this.phoneMessage="valid";
        this.isphoneValid = true;
      }
      else{
        this.phoneMessage="Invalid (only numbers, 10 digits)";
        this.isphoneValid = false;
      }
    }

    validateAddress(){
      if(this.addressvalidation.test(this.address)){
        this.addressMessage="valid";
        this.isaddressValid = true;
      }
      else{
        this.addressMessage="Invalid (only letters, numbers, comma, period, hyphen)";
        this.isaddressValid = false;
      }
    }

    validateCity(){
      if(this.cityvalidation.test(this.city)){
        this.cityMessage="valid";
        this.iscityValid = true;
      }
      else{
        this.cityMessage="Invalid (only letters)";
        this.iscityValid = false;
      }
    }

    validateState(){
      if(this.statevalidation.test(this.state)){
        this.stateMessage="valid";
        this.isstateValid = true;
      }
      else{
        this.stateMessage="Invalid (only letters)";
        this.isstateValid = false;
      }
    }

    validateZip(){
      if(this.zipvalidation.test(this.zip) && this.zip.length==6){
        this.zipMessage="valid";
        this.iszipValid = true;
      }
      else{
        this.zipMessage="Invalid (only numbers, 6 digits)";
        this.iszipValid = false;
      }   
    }
    
  previewUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result; 
      }
      reader.readAsDataURL(file);
    }
  }

  constructor(private Userinfomation: Userinfomation) {}

   onSave(emailvalue:string, phonevalue: string){
      if (
    !this.fn || !this.lastname || !this.email || !this.phone ||
    !this.address || !this.city || !this.state || !this.zip || !this.previewUrl
  ) {
    alert("Please fill the form before saving!");
    return;
  }

  // Check if any validation flag is false
  if (
    !this.isfirstnameValid || !this.islastnameValid || !this.isemailValid || 
    !this.isphoneValid || !this.isaddressValid || !this.iscityValid || 
    !this.isstateValid || !this.iszipValid
  ) {
    alert("Some fields are invalid, please correct them.");
    return;
  }
    this.Userinfomation.setUser({
      firstname:this.fn,
      lastname:this.lastname,
      email:this.email,
      phone:this.phone,
      address:this.address,
      city:this.city,
      state:this.state, 
      zip:this.zip,
      userimage:this.previewUrl
    });

    const data = this.Userinfomation.getUser();
    //  alert(`FirstName: ${data.firstname}\nlastname: ${data.lastname}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\nCity: ${data.city}\nState: ${data.state}\nZip: ${data.zip}`);


     //event Handling
     this.fname= data.firstname 
     this.lname = data.lastname
     this.info= emailvalue + ' '+phonevalue;
   }

}
