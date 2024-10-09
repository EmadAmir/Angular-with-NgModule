export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor();
  constructor(userId?: number, id?: number, title?: string, body?: string);

  constructor(userId?: number, id?: number, title?: string, body?: string) {
    this.userId = userId ?? 0;
    this.id = id ?? 0;
    this.title = title ?? '';
    this.body = body ?? '';
  }
}
