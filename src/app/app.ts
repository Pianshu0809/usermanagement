import { Component, NgModule, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Userinformation } from './userinformation/userinformation';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
}) 
export class App {
  protected readonly title = signal('demoapp');
}
