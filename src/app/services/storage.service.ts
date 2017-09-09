import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class StorageService {

  constructor(private localStorageService: LocalStorageService) {
  }

  add(item: string, value: any) {
    this.localStorageService.add(item, value);
  }

  get(key: string) {
    this.localStorageService.get(key);
  }
}
