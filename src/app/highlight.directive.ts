import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.color("yellow")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.color("None")
  }
  private color(action:string){
      this.elem.nativeElement.style.backgroundColor = action;
   }

}

