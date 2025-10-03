import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Userinfomation {
  private userData: any ={};

  setUser(data: any) {
    this.userData = data;
  }

  getUser(){
    return this.userData;
  }
}
