import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  ProductArray: Product[];
  // private router = Inject(Router);

  loggerService = inject(LoggerService);

  constructor(private router: Router) {
    let p1 = new Product(105, 'p201', 'Phone Case', 1100);
    this.ProductArray = [];
    this.ProductArray.push(p1);
    this.loggerService.setName('Emad' + Math.random());
  }

  redirectToDirective() {
    this.router.navigate(['directive-sample', 'test'], {
      queryParams: { city: 'Bangalore', country: 'India' },
    });
  }
}
