import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavs]',
})
export class FavsDirective {
  private isLiked: boolean = false;

  @Input('appFavs')
  color: string | undefined;

  constructor(private ele: ElementRef) {
    console.log(this.ele.nativeElement);

    //this.ele.nativeElement.style.color = this.color;
  }

  @HostListener('click')
  onClick() {
    this.isLiked = !this.isLiked;

    if (this.isLiked) {
      this.ele.nativeElement.value = 'unlike';
      this.ele.nativeElement.style.color = this.color;
      console.log(this.color);
    } else {
      this.ele.nativeElement.value = 'like';
      this.ele.nativeElement.style.color = 'green';
    }
  }
}
