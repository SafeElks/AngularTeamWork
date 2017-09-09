import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  title = 'Tell us about yourself';
  personalInfo: PersonalInfo = {
    username: '',
    height: '',
    weight: '',
    target: '',
    time: '',
  } as PersonalInfo;
  private mainInfoKey = 'main-info';

  constructor(private storage: StorageService, private router: Router) {
  }

  ngOnInit(): void {
    const data = this.storage.get(this.mainInfoKey);
    if (data) {
      this.personalInfo = JSON.parse(data) as PersonalInfo;
    }
  }

  onSubmit(form: any): void {
    const personalInfo = form as PersonalInfo;
    const data = JSON.stringify(personalInfo);
    this.storage.add(this.mainInfoKey, data);
    this.router.navigate(['bfc']);
  }
}

export interface PersonalInfo {
  username: string;
  height: string;
  weight: string;
  target: string;
  time: string;
}
