import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent {
  @Input()
  customerList: string[];

  @Output()
  onSelect: EventEmitter<string>;

  constructor() {
    this.customerList = [];

    this.onSelect = new EventEmitter<string>();
  }

  selectCustomerName(customer: string) {
    this.onSelect.emit(customer);
  }
}
