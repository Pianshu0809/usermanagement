import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersData } from '../service/users-data';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userdetails.html',
  styleUrls: ['./userdetails.css']
})
export class Userdetails implements OnInit {
  

  userdetail: any;

  constructor(
    private route: ActivatedRoute,
    private userservice: UsersData,
    private cdr: ChangeDetectorRef,
    private router:Router
  ) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const userid = Number(params.get('id'));
      console.log('User ID from route:', userid);

      if (userid) {
        this.userservice.getUserById(userid).subscribe({
          next: (details) => {
            this.userdetail = details;
            console.log('User details fetched:', details);
            this.cdr.detectChanges(); 
          },
          error: (err) => console.error('Error fetching user details:', err)
        });
      }
    });
  }

  getbacktouserdata(){
    this.router.navigate(['/usersdata']);
  }
}
