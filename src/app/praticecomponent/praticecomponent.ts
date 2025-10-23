import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-praticecomponent',
  imports: [],
  templateUrl: './praticecomponent.html',
  styleUrls: ['./praticecomponent.css']

})
export class Praticecomponent implements OnInit{
    @ViewChild('mydiv', { static: true }) mydiv!: ElementRef;

    constructor(private renderer: Renderer2) {}


  ngOnInit() {
    // this.mydiv.nativeElement.style.backgroundColor = 'Red';
    this.renderer.setStyle(this.mydiv.nativeElement, 'background-color', 'red');

  }
}
