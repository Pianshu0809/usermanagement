import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectPagedUsers, selectLoading, selectTotalPages, selectCurrentPage, } from '../store/selector';
import { changePage, loadUsers, searchUsers } from '../store/action';
import { Popup } from '../popup/popup';

@Component({
  selector: 'app-newusers',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './newusers.html',
  styleUrls: ['./newusers.css']
})
export class NewUsers implements OnInit {
  private store = inject(Store);

 users$ = this.store.select(selectPagedUsers);
  loading$ = this.store.select(selectLoading);
  totalPages$ = this.store.select(selectTotalPages);
  currentPage$ = this.store.select(selectCurrentPage);

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

    onSearch() {
    const query = this.searchForm.get('searchQuery')?.value?.trim() || '';
    this.store.dispatch(searchUsers({ query }));
  }


 onInputChange() {
    const query = this.searchForm.get('searchQuery')?.value?.trim() || '';
    if (!query) {
      this.store.dispatch(searchUsers({ query: '' }));
    }
  }

  onPageChange(page: number) {
     this.searchForm.reset();
     this.store.dispatch(searchUsers({ query: '' }));
    if(page>0)
    this.store.dispatch(changePage({ page }));
  }

  viewDetails(user: any) {
    if (user.source === 'api') {
      this.router.navigate(['/userdetails', user.id]);
    } else {
      localStorage.setItem('selectedUser', JSON.stringify(user));
      this.router.navigate(['/userdetails', 'local']);
    }
  }

  openPopup() {
    const dialogRef = this.dialog.open(Popup);
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.store.dispatch(loadUsers());
    });
  }
}
