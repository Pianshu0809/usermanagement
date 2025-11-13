import { Component, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item/item';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Item],   // ✅ Must include CommonModule and Item
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List implements AfterViewInit {
  names = ['Angular', 'React', 'Vue'];

  @ViewChildren(Item) items!: QueryList<Item>;

  ngAfterViewInit() {
    console.log(this.items);
  }

  showAllItems() {
    this.items.forEach(item => console.log(item.name));
  }
}
