export class Customer {
  customerName: string;
  customerId: number;

  constructor();
  constructor(cname?: string, cid?: number) {
    this.customerName = cname ?? '';
    this.customerId = cid ?? 0;
  }
}
