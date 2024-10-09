export class Product {
  productId: number;
  productCode: string;
  productName: string;
  price: number;

  constructor();
  constructor(pid?: number, pcode?: string, pname?: string, price?: number);
  constructor(pid?: number, pcode?: string, pname?: string, price?: number) {
    this.price = price ?? 0;
    this.productCode = pcode ?? '';
    this.productId = pid ?? 0;
    this.productName = pname ?? '';
  }
}
