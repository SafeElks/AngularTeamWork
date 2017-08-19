import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
  constructor(private http: Http) { }

  getHomeInfo(): Promise<string> {
    return this.http.get('api/hello')
      .toPromise()
      .then(response => response.text());
  }
}
