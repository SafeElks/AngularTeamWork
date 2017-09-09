import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {PhysicalDetails} from '../models/physicalDetails.model';

@Injectable()
export class AuthService {

  private cookieName: string;
  private cookieId: string;
  private ageCookieName = 'age';
  private heightCookieName = 'height';
  private weightCookieName = 'weight';
  private dreamKgCookieName = 'dreamKg';
  private genderCookieName = 'gender';

  constructor(private cookieService: CookieService) {
    this.cookieName = 'username';
    this.cookieId = 'userId';
  }

  getLoggedUser(): string {
    const username: string = this.cookieService.get(this.cookieName);
    if (!username) {
      return undefined;
    }

    return username;
  }

  getLoggedUserId(): string {
    const id: string = this.cookieService.get(this.cookieId);
    if (!id) {
      return undefined;
    }

    return id;
  }

  isLogged() {
    return this.cookieService.check(this.cookieName);
  }

  setLoggedUser(username: string) {
    const cookieDate: Date = new Date(2060, 1, 1);
    this.cookieService.set(this.cookieName, username, cookieDate);
  }

  setLoggedUserId(id: string) {
    const cookieDate: Date = new Date(2060, 1, 1);
    this.cookieService.set(this.cookieId, id, cookieDate);
  }

  clearUserCookie(): void {
    this.cookieService.delete(this.cookieName);
  }


  savePersonalData(data: PhysicalDetails) {
    const cookieDate: Date = new Date(2060, 1, 1);
    this.cookieService.set(this.ageCookieName, data.age, cookieDate);
    this.cookieService.set(this.heightCookieName, data.height, cookieDate);
    this.cookieService.set(this.weightCookieName, data.weight, cookieDate);
    this.cookieService.set(this.dreamKgCookieName, data.dreamKg, cookieDate);
    this.cookieService.set(this.genderCookieName, data.gender, cookieDate);
  }

  clearPersonalData(): void {
    this.cookieService.delete(this.ageCookieName);
    this.cookieService.delete(this.heightCookieName);
    this.cookieService.delete(this.weightCookieName);
    this.cookieService.delete(this.dreamKgCookieName);
    this.cookieService.delete(this.genderCookieName);
  }

  getPersonalData(): PhysicalDetails {
    const personalData = new PhysicalDetails();

    personalData.age = this.cookieService.get(this.ageCookieName);
    personalData.height = this.cookieService.get(this.heightCookieName);
    personalData.weight = this.cookieService.get(this.weightCookieName);
    personalData.dreamKg = this.cookieService.get(this.dreamKgCookieName);
    personalData.gender = this.cookieService.get(this.genderCookieName);

    return personalData;
  }
}
