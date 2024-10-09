import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [RouterOutlet, DirectiveSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-training';
  messageService = inject(MessageService);
  message: string = '';

  constructor() {
    this.messageService.getMessage().subscribe({
      next: (resp) => {
        this.message = resp;
        setTimeout(() => {
          this.message = '';
        }, 2000);
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('completed!!');
      },
    });
  }
}
