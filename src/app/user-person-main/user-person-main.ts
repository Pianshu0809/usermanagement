import { Component } from '@angular/core';
import { UserProfileData } from '../user-profile-data/user-profile-data';
import { UserProfileInfo } from '../user-profile-info/user-profile-info';

@Component({
  selector: 'app-user-person-main',
  imports: [UserProfileData, UserProfileInfo],
  standalone: true,
  templateUrl: './user-person-main.html',
  styleUrl: './user-person-main.css'
})
export class UserPersonMain {

}
