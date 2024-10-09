import { inject, Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  httpClient = inject(HttpClient);
  url: string = 'https://postman-library-api.glitch.me/books';
  constructor() {}

  getBooks() {
    return this.httpClient.get<Book[]>(this.url);
  }

  AddBook(bookToInsert: Book) {
    let data = JSON.stringify(bookToInsert);
    return this.httpClient.post<any>(this.url, data);
  }

  deleteBook(bookId: string) {}
  getBookById(bookId: string) {}
}
