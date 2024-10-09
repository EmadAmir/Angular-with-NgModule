import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { MessageService } from '../service/message.service';
import { PostService } from '../service/post.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  post: Post;
  postService = inject(PostService);
  messageService = inject(MessageService);
  error: any;

  constructor() {
    this.post = new Post();
  }

  onSubmit(userForm: any) {
    if (userForm.valid) {
      this.post.body = userForm.value.Description;
      this.post.id = userForm.value.ID;
      this.post.userId = userForm.value.UserID;
      this.post.title = userForm.value.Title;
      let placeholder = JSON.stringify(this.post, null, 2);
      console.warn(placeholder);

      console.log(userForm.value.UserID);
      this.postService.addPosts(this.post).subscribe({
        next: (resp) => {
          console.log(`repsonse is ${JSON.stringify(resp)}`);
        },
        error: (err) => {
          this.error = err;
          console.log(`error is ${err}`);
        },
      });

      this.messageService.notify(' The form is submitted, Thank you!!');
    } else {
      this.messageService.notify(
        'Please fix the issues the errors on the form!!'
      );
    }
  }
}
