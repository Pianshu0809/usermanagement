import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appLengthlimit]'
})
export class LengthlimitDirective implements OnChanges {
  @Input() appLengthlimit: string = '';
  @Input() maxLength: number = 35;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.applyLimit();
  }

  private applyLimit(){
    if (this.appLengthlimit && this.appLengthlimit.length > this.maxLength) {
      this.el.nativeElement.textContent = this.appLengthlimit.slice(0, this.maxLength) + '...';
    } else {
      this.el.nativeElement.textContent = this.appLengthlimit;
    }
  }
}
