import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };
  
  @Input('highlight') highlightColor = 'green';
  @Input() defaultColor = 'white'; 

  private backgroundColor: string;
  constructor() { 
    // this.elementRef.nativeElement.style.backgroundColor = 'blue';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}

