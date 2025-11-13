import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Userinformation } from './userinformation/userinformation';
import { Profileinformation } from './profileinformation/profileinformation';
import { Counter } from './counter/counter';
import { Usersdata } from './usersdata/usersdata';
import { Userdetails } from './userdetails/userdetails';
import { Limitlen } from './limitlen/limitlen';
import { NewUsers } from './newusers/newusers';
import { Pipedemo } from './pipedemo/pipedemo';
import { Parent } from './parent/parent';
import { List } from './list/list';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: Login },
  { path: 'userinformation', component: Userinformation },
  { path: 'profileinformation', component: Profileinformation },
  { path: 'counter', component: Counter }, 
  { path: 'usersdata', component: Usersdata },
  {path:'userdetails/:id', component: Userdetails},
  {path:'limitlen', component:Limitlen},
  {path: 'newusers', component: NewUsers},
  {path:'pipedemo', component: Pipedemo},
  {path:'parentcomponent', component:Parent},
  {path:'list', component: List},
  { path: '**', redirectTo: 'login' } 
];
