import {
  Directive,
  HostListener,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[appOnoutsideclick]'
})
export class OnoutsideclickDirective {
  constructor(private elementRef: ElementRef) {}

  @Output()
  public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event'])
  public onClick(targetElement) {
    const isClickedInside = this.elementRef.nativeElement.contains(
      targetElement.target
    );
    if (!isClickedInside) {
      this.clickOutside.emit(targetElement);
    }
  }
}
