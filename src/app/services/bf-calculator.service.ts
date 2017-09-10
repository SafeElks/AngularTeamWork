import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {BodyFatInfo} from '../calculator/bf-calculator/bf-form/bf-form.component';
import {Units} from '../calculator/bf-calculator/bf-calculator.component';

@Injectable()
export class BfCalculatorService {

  constructor(private http: Http) {
  }

  getBfPercentage(bfInfo: BodyFatInfo, units: Units): Observable<any> {
    if (units === Units.US) {
      return this.getBfPercentageUS(bfInfo);
    } else if (units === Units.Metrics) {
      return this.getBfPercentageMetrics(bfInfo);
    } else {
      throw Error('Unsupported metric system');
    }
  }

  private getBfPercentageUS(bfInfo: BodyFatInfo): Observable<any> {
    const gen = bfInfo.gender === 'true';
    try {
      const [heightFeet, heightInches] = bfInfo.height.split(' ');
      const [neckFeet, neckInches] = bfInfo.neck.split(' ');
      const [waistFeet, waistInches] = bfInfo.waist.split(' ');
      const [hipFeet, hipInches] = bfInfo.hip.split(' ');

      const corsUrl = `https://cors-anywhere.herokuapp.com/`;
      const queryUrl = `http://www.calculator.net/body-fat-calculator.html?ctype=standard&csex=${gen ? 'm' : 'f'}&cheightfeet=${heightFeet}&cheightinch=${heightInches}&cneckfeet=${neckFeet}&cneckinch=${neckInches}&cwaistfeet=${waistFeet}&cwaistinch=${waistInches}&chipfeet=${hipFeet}&chipinch=${hipInches}`;
      // console.log(`Sent GET to ${queryUrl}`);
      return this.http.get(corsUrl + queryUrl);
    } catch (e) {
      return Observable.of('Format error');
    }
  }

  private getBfPercentageMetrics(bfInfo: BodyFatInfo): Observable<any> {
    const gen = bfInfo.gender === 'true';
    const height = bfInfo.height;
    const neck = bfInfo.neck;
    const waist = bfInfo.waist;
    const hip = bfInfo.hip;

    const corsUrl = `https://cors-anywhere.herokuapp.com/`;
    const queryUrl = `http://www.calculator.net/body-fat-calculator.html?ctype=metric&csex=${gen ? 'm' : 'f'}&cheightmeter=${height}&cneckmeter=${neck}&cwaistmeter=${waist}&chipmeter=${hip}`;

    // console.log(`Sent GET to ${queryUrl}`);
    return this.http.get(corsUrl + queryUrl);
  }
}
