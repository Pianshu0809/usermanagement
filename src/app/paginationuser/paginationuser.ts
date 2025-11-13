import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginationuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginationuser.html',
  styleUrls: ['./paginationuser.css']
})
export class Paginationuser implements OnChanges {
  @Input() totalItems = 0;
  @Input() itemsPerPage = 25;
  @Input() currentPage = 1;
  @Output() pageChange = new EventEmitter<number>();

  totalPages: number[] = [];

  ngOnChanges() {
    const total = Math.ceil(this.totalItems / this.itemsPerPage);
    this.totalPages = Array.from({ length: total }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages.length) return;
    this.pageChange.emit(page);
  }

  previousPage() {
    this.changePage(this.currentPage - 1);
  }

  nextPage() {
    this.changePage(this.currentPage + 1);
  }
}
