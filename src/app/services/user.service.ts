import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private registerUrl = '/api/users';
  private loginUrl = '/api/authenticate';
  private logoutUrl = '/api/logout';
  private profileUrl = '/api/users';
  private updateKgUrl = '/api/users/kg';
  private updateAgeUrl = '/api/users/age';
  private updateHeightUrl = '/api/users/height';

  constructor(private http: Http) {
  }

  registerUser(user: User): Observable<Response> {
    return this.http.post(this.registerUrl, JSON.stringify(user), {
      headers: this.headers
    });
  }

  loginUser(user: User): Observable<Response> {
    return this.http.post(this.loginUrl, JSON.stringify({
      username: user.name, password: user.password
    }), {
      headers: this.headers
    });
  }

  logoutUser(): Observable<Response> {
    return this.http.get(this.logoutUrl);
  }

  getProfile(id: string): Observable<Response> {
    return this.http.get(this.profileUrl + '/' + id);
  }

  getUsers(): Observable<Response> {
    return this.http.get(this.profileUrl);
  }

  updateAge(age: string): Observable<Response> {
    return this.http.post(this.updateAgeUrl, JSON.stringify({age: age}), {headers: this.headers});
  }
  updateKg(kg: string): Observable<Response> {
    return this.http.post(this.updateKgUrl, JSON.stringify({kg: kg}), {headers: this.headers});
  }
  updateHeight(height: string): Observable<Response> {
    return this.http.post(this.updateHeightUrl, JSON.stringify({height: height}), {headers: this.headers});
  }
}
