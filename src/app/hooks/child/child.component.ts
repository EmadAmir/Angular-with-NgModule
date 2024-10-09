import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnChanges {
  @Input('customer-list')
  customers: Customer[];

  @Input()
  cname: string | undefined;

  constructor() {
    this.customers = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.customers);
    console.log(this.cname);
  }
}
