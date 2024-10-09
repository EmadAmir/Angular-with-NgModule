import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css',
})
export class CustomerAddComponent {
  customerName: string | undefined;

  customer: string[] | undefined;

  @ViewChild('clistComp')
  CustListComp: CustomerListComponent | undefined;

  @ViewChild('divMessage')
  div: ElementRef | undefined;

  constructor() {
    this.customer = [];
  }

  addCustomer() {
    // this.customer.push(this.customerName ?? '');

    this.CustListComp?.customerList.push(this.customerName ?? '');
    this.customer = this.CustListComp?.customerList;

    if (this.div != undefined) {
      this.div.nativeElement.innerText = 'Customer Name is added!!';
    }
    setTimeout(() => {
      if (this.div != undefined) {
        this.div.nativeElement.innerText = '';
      }
    }, 1000);
    console.log(this.customer);
  }

  renderName(customer: string) {
    this.customerName = customer;
  }
}
