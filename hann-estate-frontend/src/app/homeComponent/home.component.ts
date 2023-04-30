import {Component, ElementRef, HostListener, Renderer2} from "@angular/core";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private ele: ElementRef) {
  }
  previousPosition: number = 0;
  ngOnInit() {
    console.log("HomeComponent: ngOnInit(")
    this.ele.nativeElement.addEventListener('scroll', () => {
      console.log('scrolling');
    });
  }

}
