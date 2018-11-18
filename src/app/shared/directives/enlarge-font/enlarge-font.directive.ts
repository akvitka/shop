import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appEnlargeFont]'
})
export class EnlargeFontDirective {

  @Input('appEnlargeFont')
  public size: string;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') onMouseEnter() {
    this.el.style.fontSize = this.size;
  }

}
