import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersData } from '../service/users-data';
import { CommonModule } from '@angular/common';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      console.log('User ID from route:', userId);

      if (userId === 'local') {
        this.userdetail = JSON.parse(localStorage.getItem('selectedUser') || '{}');
        console.log('Loaded local user details:', this.userdetail);
        this.cdr.detectChanges();
      } 
      else if (userId) {
        this.userservice.getUserById(Number(userId)).subscribe({
          next: (details) => {
            this.userdetail = details;
            console.log('Fetched API user details:', details);
            this.cdr.detectChanges();
          },
          error: (err) => console.error('Error fetching API user details:', err)
        });
      }
    });
  }

  getbacktouserdata() {
    this.router.navigate(['/usersdata']);
  }
}
