import {Component, OnInit, ViewChild} from '@angular/core';
import {MdDatepicker} from '@angular/material';
import {PhysicalDetails} from '../models/physicalDetails.model';
import {PlanService} from '../services/plan.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;
  physicalDetails: PhysicalDetails = new PhysicalDetails();
  data = new PhysicalDetails();
  showForm = true;
  title = 'Tell us about yourself';
  activities = [
    {type: 'Little or no exercise', value: 1.2},
    {type: 'Lightly Active - 1-3 times/week', value: 1.45},
    {type: 'Moderately Active - 3-5 times/week', value: 1.70},
    {type: 'Very Active - 6-7 times/week', value: 1.95}
  ];
  d = new Date();
  year = this.d.getFullYear();
  month = this.d.getMonth();
  day = this.d.getDate();
  minDate = new Date(this.year, this.month, this.day + 1);
  maxDate = new Date(this.year + 1, this.month, this.day);
  calories: number;

  constructor(private planService: PlanService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const days = Math.ceil((((new Date(this.physicalDetails.days)).getTime()) - (new Date().getTime())) / (1000 * 3600 * 24));
    Object.assign(this.data, this.physicalDetails);
    this.data.days = days;
    console.log(this.data);
    this.planService.getCaloriesPerDay(this.data)
      .map((res) => res.json())
      .subscribe((response: any) => {
        this.calories = response.calories;
        if (this.calories > 1000 && this.calories < 4000) {
          this.showForm = false;
          this.authService.savePersonalData(this.physicalDetails);
        } else {
          console.log('It is impossible, please select more days');
        }
      }, (err) => {
        console.log(err);
      });
  }

  goBack(): void {
    this.authService.clearPersonalData();
    this.showForm = true;
  }
}
