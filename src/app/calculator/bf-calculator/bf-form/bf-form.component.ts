import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import {BfCalculatorService} from '../../../services/bf-calculator.service';
import {ErrorMessage} from '../bf-calculator.component';

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
  @Output() onError = new EventEmitter<ErrorMessage>();

  private bodyFatKey = 'body-fat-data';

  constructor(private storage: StorageService, private calculatorService: BfCalculatorService) {
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
        if (!resBody) {
          this.onProgress.emit(false);
          throw Error('Format error');
        }
        const bfResult = this.extractBfPercentage(resBody);
        this.onBfResult.emit(bfResult);
      }, err => {
        this.onError.emit({text: err, status: 'no'});
        this.onProgress.emit(false);
      });
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
      this.onError.emit({text: 'Error, couldn\'t get body fat result', status: 'no'});
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


