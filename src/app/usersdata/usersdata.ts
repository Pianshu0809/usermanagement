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

  newusers: any[] = [];

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  currentPage = 1;
  itemsPerPage = 25;
  totalItems = 0;

  constructor(private userservice: UsersData, 
    private router: Router, 
    private cdref:ChangeDetectorRef,
    public dialog: MatDialog,
  ) {}


  ngOnInit() {
    this.fetchData(); 
  }

  fetchData() {
  this.userservice.getUser().subscribe({
    next: (response: any) => {
      this.users = response.users;
      this.newusers = JSON.parse(localStorage.getItem('Dummy Users Data') || '[]');
      const formattedData = this.newusers.map((user: any, index: number) => ({
        id: this.users.length + index + 1, 
        firstName: user.fn,
        lastName: user.ln,
        maidenName: user.mn || '',
        age: user.age,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        username: user.username,
        password: user.password,
        birthDate: user.birthdate,
        image: user.userimage,
        bloodGroup: user.bloodgroup,
        height: user.height,
        weight: user.weight,
        eyeColor: user.eyecolor,
        hair: {
          color: user.hair?.color,
          type: user.hair?.type
        },
        ip: user.ipaddress,
        address: {
          address: user.address?.address,
          city: user.address?.city, 
          state: user.address?.state,
          stateCode: user.address?.statecode,
          postalCode: user.address?.postalcode, 
          coordinates: {
            lat: user.address?.coordinates?.lat,
            lng: user.address?.coordinates?.lng
          },
          country: user.address?.country
        },
        source:'local'
      }));

  
      this.users = [...this.users, ...formattedData];

      this.filteredUsers = this.users;
      this.totalItems = this.filteredUsers.length;
      this.updatePaginationUsers();
      this.cdref.detectChanges();

      console.log("Merged Users:", this.users);
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

  viewDetails(user: any) {
    if(user.source=== 'api'){
      this.router.navigate(['/userdetails', user.id]);
    }else{
      localStorage.setItem('selectedUser',JSON.stringify(user))
      this.router.navigate(['/userdetails','local']);

    }
    
  }
  
  openPopup(){
    const dialogRef = this.dialog.open(Popup);

    dialogRef.afterClosed().subscribe((result)=>{
      console.log("this is my resutl: ", result)
      if(result){
        this.fetchData();
      }
    })
  }

}
