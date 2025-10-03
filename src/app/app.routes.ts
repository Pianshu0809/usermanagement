import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Userinformation } from './userinformation/userinformation';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Default route
  { path: 'login', component: Login },                   // Login component
  { path: 'userinformation', component: Userinformation } // User information component
];
