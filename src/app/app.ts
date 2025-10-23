import { Component, NgModule, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Userinformation } from './userinformation/userinformation';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Profileinformation } from './profileinformation/profileinformation';
import { ReactiveFormsModule } from '@angular/forms';
// import { Praticecomponent } from './praticecomponent/praticecomponent';
import {Counter} from './counter/counter'
import { Comp1 } from './comp1/comp1';
import { Comp2 } from './comp2/comp2';
import { Dataservice } from './service/dataservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
}) 
export class App {
  protected readonly title = signal('demoapp');

}
