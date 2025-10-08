import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Userinformation } from './userinformation/userinformation';
import { Profileinformation } from './profileinformation/profileinformation';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Default route
  { path: 'login', component: Login },                   // Login component
  { path: 'userinformation', component: Userinformation },
  {path: 'profileinformation', component: Profileinformation}


  
];
