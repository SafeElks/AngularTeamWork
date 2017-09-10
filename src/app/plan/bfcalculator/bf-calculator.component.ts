import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-bf-calculator',
  templateUrl: './bf-calculator.component.html',
  styleUrls: ['./bf-calculator.component.css']
})
export class BfCalculatorComponent implements OnInit {
  title = 'Body Fat Calculator';
  inProgress = false;
  result = 0;

  constructor() {
  }

  ngOnInit() {

  }
}

@Pipe({name: 'changeMetrics'})
export class ChangeMetrics implements PipeTransform {
  transform(value: string): string {
    let newStr: string = value + ' (cm)';
    return newStr;
  }
}

@Pipe({name: 'changeUS'})
export class ChangeUS implements PipeTransform {
  transform(value: string): string {
    let newStr: string = value + ' (feet inches)';
    return newStr;
  }
}
