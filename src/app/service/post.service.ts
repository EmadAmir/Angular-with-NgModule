import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpClient = inject(HttpClient);
  apiUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor() {}

  getPosts() {
    return this.httpClient.get<any>(`${this.apiUrl} + /posts`);
  }

  addPosts(postToInsert: Post) {
    let data = JSON.stringify(postToInsert);
    let newHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(this.apiUrl + '/posts', data, {
      headers: newHeader,
    });
  }

  deletePost(postId: number) {
    return this.httpClient.delete<any>(this.apiUrl + `/posts/${postId}`);
  }
  getPostById(postId: number) {
    return this.httpClient.get<any>(this.apiUrl + `/posts/${postId}`);
  }
}
