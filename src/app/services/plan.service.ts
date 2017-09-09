import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {PhysicalDetails} from '../models/physicalDetails.model';

@Injectable()
export class PlanService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private caloriesPerDayUrl = '/api/caloriesPerDay';


  constructor(private http: Http) {
  }

  getCaloriesPerDay(data: PhysicalDetails): Observable<Response> {
    return this.http.post(this.caloriesPerDayUrl, JSON.stringify(data), {
      headers: this.headers
    });
  }

}
