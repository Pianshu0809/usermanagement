import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersData } from '../service/users-data';
import { Router } from '@angular/router';
import { Paginationuser } from '../paginationuser/paginationuser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usersdata',
  standalone: true,
  imports: [CommonModule, Paginationuser, ReactiveFormsModule],
  templateUrl: './usersdata.html',
  styleUrls: ['./usersdata.css']
})
export class Usersdata implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  paginationUsers: any[] = [];

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;

  constructor(private userservice: UsersData, private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
     alert(1);
    this.userservice.getUser().subscribe({
      next: (response: any) => {
        this.users = response.users;
        this.filteredUsers = this.users;
        this.totalItems = this.filteredUsers.length;
        this.updatePaginationUsers();
        alert(2);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  updatePaginationUsers() {
    alert(3);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginationUsers = this.filteredUsers.slice(startIndex, endIndex);
  }

  onSearch() {
    const query = this.searchForm.value.searchQuery?.trim().toLowerCase() || '';

    if (query === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        user.maidenName.toLowerCase().includes(query) ||
        user.age.toString().includes(query) ||
        user.gender.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.phone.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.password.toLowerCase().includes(query) ||
        user.birthDate.toLowerCase().includes(query)
      );
    }

    this.totalItems = this.filteredUsers.length;
    this.currentPage = 1;
    this.updatePaginationUsers();
  }

  onInputChange() {
    const query = this.searchForm.value.searchQuery?.trim() || '';

    if (query === '') {
      this.filteredUsers = this.users;
      this.totalItems = this.filteredUsers.length;
      this.currentPage = 1;
      this.updatePaginationUsers();
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.searchForm.get('searchQuery')?.setValue('');
    this.filteredUsers = this.users;
    this.totalItems=this.filteredUsers.length;
    this.updatePaginationUsers();
  }

  viewDetails(id: number) {
    this.router.navigate(['/userdetails', id]);
  }
}
