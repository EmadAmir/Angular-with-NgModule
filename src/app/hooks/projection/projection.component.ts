import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.css',
})
export class ProjectionComponent implements AfterContentInit {
  @ContentChild('p')
  para: ElementRef | undefined;

  ngAfterContentInit(): void {
    console.log(this.para);
  }
}
