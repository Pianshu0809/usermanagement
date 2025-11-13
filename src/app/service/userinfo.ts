import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Userinfo {

  constructor(private http: HttpClient){}

  getUser(){
    return this.http.get('https://dummyjson.com/users?limit=208&skip=0');
  }
  
}
