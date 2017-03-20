import { Component ,HostListener, Directive, HostBinding} from '@angular/core';

@Directive({    
    selector: '.highlight'
 })
export class ExerciseHighlightDirective {
  @HostBinding('class') backgroundColor = "container"; 

  @HostListener('mouseenter') onEnter() {
    this.backgroundColor= "container container-hover" ;
  }

  @HostListener('mouseleave') onLeave() {
    this.backgroundColor = "container";
  }
}