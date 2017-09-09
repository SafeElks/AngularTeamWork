import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class StorageService {

  constructor(private localStorageService: LocalStorageService) {
  }

  add(item: string, value: any): void {
    localStorage.setItem(item, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }
}
