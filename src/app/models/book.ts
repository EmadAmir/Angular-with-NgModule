export class Book {
  title: string;
  author: string;
  id: string;
  genre: string;
  yearPublished: number;
  checkedOut: boolean;

  constructor(
    title: string,
    author: string,
    id: string,
    genre: string,
    yearPublished: number,
    checkedOut: boolean
  );
  constructor(
    title: string,
    author: string,
    id: string,
    genre: string,
    yearPublished: number,
    checkedOut: boolean
  ) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.genre = genre;
    this.yearPublished = yearPublished;
    this.checkedOut = checkedOut;
  }
}
