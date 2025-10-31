import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersData } from '../service/users-data';
import { Router } from '@angular/router';
import { Paginationuser } from '../paginationuser/paginationuser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Popup } from '../popup/popup';

@Component({
  selector: 'app-usersdata',
  imports: [Paginationuser, ReactiveFormsModule,CommonModule],
  templateUrl: './usersdata.html',
  styleUrl: './usersdata.css',

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

  constructor(private userservice: UsersData, 
    private router: Router, 
    private cdref:ChangeDetectorRef,
    public dialog: MatDialog
  ) {}


  ngOnInit() {
    this.fetchData(); 
  }

  fetchData() {
    this.userservice.getUser().subscribe({
      next: (response: any) => {
        this.users = response.users;
        console.log(this.users);
        this.filteredUsers = this.users;
        this.totalItems = this.filteredUsers.length;
        this.updatePaginationUsers();
        this.cdref.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  updatePaginationUsers() {
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
  
  openPopup(id: number){
    const dialogRef = this.dialog.open(Popup,{ data:{firstname:'', lastname:'', middlename:''}});

    dialogRef.afterClosed().subscribe((result)=>{console.log("this is my resutl: ", result)})
  }
}
