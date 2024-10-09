import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private name: string = '';
  constructor() {
    console.log(`object created`);
  }

  public setName(nm: string) {
    this.name = nm;
    console.log('Name is set');
  }

  public getName() {
    console.log(`Name = ${this.name}`);
  }
}
