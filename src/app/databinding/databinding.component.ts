import { Component, inject } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-databinding',
  standalone: false,
  // imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  loggerService = inject(LoggerService);

  constructor() {
    this.loggerService.getName();
  }
}
