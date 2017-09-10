import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from "../../../services/storage.service";
import {BfCalculatorService} from "../../../services/bf-calculator.service";

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
  @Input() unitSystem: number;

  @Output() onBfResult = new EventEmitter<string>();
  @Output() onProgress = new EventEmitter<boolean>();

  private bodyFatKey = "body-fat-data";

  constructor(private storage: StorageService, private calculatorService: BfCalculatorService, private router: Router) {

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

    this.onProgress.emit(true);
    const res = this.calculatorService
      .getBfPercentage(form, this.unitSystem)
      .subscribe((response: any) => {
        const resBody = response._body;
        const bfResult = this.extractBfPercentage(resBody);
        this.onBfResult.emit(bfResult);
      }, err => {
        console.log(err);
        this.onProgress.emit(false);
      });

    // nav to calorie calculator route
    // this.router.navigate(['']);
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

  private extractBfPercentage(data: string) {
    const target = `<b>body fat =`;
    const resStartIndex = data.indexOf(target);
    if (resStartIndex === -1) {
      console.log('Error, couldn\'t get body fat result');
      return '0%';
    }
    const resEndIndex = data.indexOf('</b', resStartIndex + target.length);
    const result = data.substring(resStartIndex + target.length, resEndIndex);
    return result;
  }
}

export interface BodyFatInfo {
  height: string;
  neck: string;
  waist: string;
  hip: string;
  gender: string;
}


