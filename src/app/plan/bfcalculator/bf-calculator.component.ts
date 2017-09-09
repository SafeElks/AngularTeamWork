import {Component, OnInit} from '@angular/core';

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
