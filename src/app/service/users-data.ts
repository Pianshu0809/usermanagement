import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersData {

 private url="https://dummyjson.com/users"

 constructor(private http:HttpClient){}

 getUser(): Observable<any>{
  return this.http.get<any>(this.url)
 }
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  
}
