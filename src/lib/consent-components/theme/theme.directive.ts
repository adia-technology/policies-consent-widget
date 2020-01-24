import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Theme } from './theme';

@Directive({
  selector: '[theme]'
})
export class ThemeDirective implements OnChanges {
  @Input('theme') t: Theme;

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngOnChanges() {
    Object.keys(this.t).forEach(prop => {
      this.el.nativeElement.style.setProperty(`--${prop}`, this.t[prop]);
    });
  }
}