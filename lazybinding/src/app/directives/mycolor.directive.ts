import { ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string

  

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'white'
    this.bgcolor= 'black'
   }

   @HostListener('mouseover') onMouseOver(){
     this.color ='yellow'
    //  this.bgcolor = 'red'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.color = 'white'
    this.bgcolor= 'black'
    // this.bgcolor = 'yellow'
   }

}
