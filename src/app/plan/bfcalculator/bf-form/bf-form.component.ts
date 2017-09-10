import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-bf-form',
  templateUrl: './bf-form.component.html',
  styleUrls: ['./bf-form.component.css']
})
export class BfFormComponent implements OnInit {
  height: string;
  neck: string;
  waist: string;
  hip: string;
  gender: string;

  @Input() heightPlaceholder: number;
  @Input() neckPlaceholder: number;
  @Input() waistPlaceholder: number;
  @Input() hipPlaceholder: number;

  private bodyFatKey = "body-fat-data";
  private unitSystem = Units.Metrics;

  get() {
    return this.unitSystem;
  }

  set (value) {
      this.unitSystem = value;
  }

  constructor(private storage: StorageService, private router: Router) {

  }

  ngOnInit(): void {
    const data = this.storage.get(this.bodyFatKey + this.unitSystem);
    if (data) {
      const bfData = JSON.parse(data);
      this.extractData(bfData);
    }
  }

  onSubmit(form: any): void {
    const data = JSON.stringify(form);
    this.storage.add(this.bodyFatKey + this.unitSystem, data);
    // nav to calorie calculator route
    this.router.navigate(['']);
  }

  private extractData(bfData: any) {
    if (bfData) {
      const bfInfo = bfData as BodyFatInfo;
      if (bfInfo) {
        this.height = bfInfo.height;
        this.neck = bfInfo.neck;
        this.waist = bfInfo.waist;
        this.hip = bfInfo.hip;
        this.gender = bfInfo.gender;
      }
    }
  }
}

export interface BodyFatInfo {
  height: string;
  neck: string;
  waist: string;
  hip: string;
  gender: string;
}

export enum Units {
  Metrics = 1,
  US = 2,
  Other = 3
}
