import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive-sample',
  standalone: false,
  //imports: [FormsModule, CommonModule],
  templateUrl: './directive-sample.component.html',
  styleUrl: './directive-sample.component.css',
})
export class DirectiveSampleComponent {
  num: number;
  color: string[];
  product: Product[];
  selectedColor: string = 'red';
  id: string | undefined;
  city: string | undefined;
  country: string | undefined;
  activatedRounte = inject(ActivatedRoute);

  constructor() {
    this.num = 0;
    this.color = ['red', 'green', 'blue', 'yellow', 'Grey', 'black', 'white'];

    let p1 = new Product(101, 'Book', 'p110', 100);
    let p2 = new Product(102, 'pens', 'p111', 120);
    let p3 = new Product(103, 'Rubber', 'p109', 50);
    let p4 = new Product(104, 'pencil', 'p117', 200);

    this.product = [];
    this.product.push(p1);
    this.product.push(p2);
    this.product.push(p3);
    this.product.push(p4);

    this.activatedRounte.params.subscribe((data) => {
      this.id = data['id'];
    });
    this.activatedRounte.queryParams.subscribe((data) => {
      this.city = data['city'];
      this.country = data['country'];
    });
  }
}
