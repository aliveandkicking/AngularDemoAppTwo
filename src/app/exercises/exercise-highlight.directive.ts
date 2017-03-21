import { Component ,HostListener, Directive, HostBinding} from '@angular/core';

@Directive({    
    selector: '[highlight]'
 })
export class ExerciseHighlightDirective {
  @HostBinding('class') className = "container"; 

  @HostListener('mouseenter') onEnter() {
    this.className = "container container-hover" ;
  }

  @HostListener('mouseleave') onLeave() {
    this.className = "container";
  }
}