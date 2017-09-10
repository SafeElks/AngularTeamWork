import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {BodyFatInfo} from "../plan/bfcalculator/bf-form/bf-form.component";
import {Units} from "../plan/bfcalculator/bf-calculator.component";

@Injectable()
export class BfCalculatorService {

  constructor(private http: Http) {
  }

  getBfPercentage(bfInfo: BodyFatInfo, units: Units): Observable<Response> {
    if (units === Units.US) {
      return this.getBfPercentageUS(bfInfo);
    } else if (units === Units.Metrics) {
      return this.getBfPercentageMetrics(bfInfo);
    } else {
      console.log('Unsupported metric system');
    }
  }

  private getBfPercentageUS(bfInfo: BodyFatInfo): Observable<Response> {
    const gen = Boolean(bfInfo.gender);
    const [heightFeet, heightInches] = bfInfo.height.split(' ');
    const [neckFeet, neckInches] = bfInfo.neck.split(' ');
    const [waistFeet, waistInches] = bfInfo.waist.split(' ');
    const [hipFeet, hipInches] = bfInfo.hip.split(' ');

    const corsUrl = `https://cors-anywhere.herokuapp.com/`;
    const queryUrl = `http://www.calculator.net/body-fat-calculator.html?ctype=standard&csex=${gen ? 'm' : 'f'}&cheightfeet=${heightFeet}&cheightinch=${heightInches}&cneckfeet=${neckFeet}&cneckinch=${neckInches}&cwaistfeet=${waistFeet}&cwaistinch=${waistInches}&chipfeet=${hipFeet}&chipinch=${hipInches}`;
    return this.http.get(corsUrl + queryUrl);
  }

  private getBfPercentageMetrics(bfInfo: BodyFatInfo): Observable<Response> {
    const gen = Boolean(bfInfo.gender);
    const height = bfInfo.height;
    const neck = bfInfo.neck;
    const waist = bfInfo.waist;
    const hip = bfInfo.hip;

    const corsUrl = `https://cors-anywhere.herokuapp.com/`;
    const queryUrl = `http://www.calculator.net/body-fat-calculator.html?ctype=metric&csex=${gen ? 'm' : 'f'}&cheightmeter=${height}&cneckmeter=${neck}&cwaistmeter=${waist}&chipmeter=${hip}`;
    return this.http.get(corsUrl + queryUrl);
  }
}
