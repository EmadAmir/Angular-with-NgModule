import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  customer: Customer;
  customers: Customer[];

  constructor() {
    this.customer = new Customer();
    this.customers = [];
  }

  ngOnInit(): void {
    console.log('parent OnInit triggered');
  }

  addCustomer() {
    let ob = Object.assign({}, this.customer);
    this.customers.push(ob);
    console.log(this.customers);
  }
}
