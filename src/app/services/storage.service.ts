import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }

  add(item: string, value: any): void {
    localStorage.setItem(item, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }
}
