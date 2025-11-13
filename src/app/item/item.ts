import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,          // ✅ Needed since you're using standalone components
  imports: [],               // ✅ Can stay empty
  templateUrl: './item.html',
  styleUrls: ['./item.css']  // ✅ Should be plural: styleUrls
})
export class Item {
  @Input() name!: string;    // ✅ Correct Input property
}
