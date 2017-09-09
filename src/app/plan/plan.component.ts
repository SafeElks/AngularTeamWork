import {Component, OnInit, ViewChild} from '@angular/core';
import {MdDatepicker} from '@angular/material';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;

  title = 'Tell us about yourself';
  genders = ['Male', 'Female'];
  activities = [
    'Little or no exercise',
    'Lightly Active - 1-3 times/week',
    'Moderately Active - 3-5 times/week',
    'Very Active - 6-7 times/week'
  ];
  minDate = new Date();
  year = this.minDate.getFullYear();
  month = this.minDate.getMonth();
  day = this.minDate.getDate();
  maxDate = new Date(this.year + 1, this.month, this.day);

  constructor() { }

  ngOnInit() {
  }

}
