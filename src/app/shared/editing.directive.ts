import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEditing]'
})
export class EditingDirective {
  bgColor: string;
  constructor(private ElementRef: ElementRef) {
    this.bgColor = '#F1F1F1';
  }
  @HostListener('click') onItemClick() {
    this.ElementRef.nativeElement.style.background = this.bgColor;
    setTimeout(() => {
      this.ElementRef.nativeElement.style.background = '#fff';
    }, 1000);
  }
}
