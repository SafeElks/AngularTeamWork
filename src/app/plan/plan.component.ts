import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { MdDatepicker } from '@angular/material';
import { PhysicalDetails } from '../models/physicalDetails.model';
import { PlanService } from '../services/plan.service';
import { AuthService } from '../services/auth.service';

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
    { type: 'Little or no exercise', value: 1.2 },
    { type: 'Lightly Active - 1-3 times/week', value: 1.45 },
    { type: 'Moderately Active - 3-5 times/week', value: 1.70 },
    { type: 'Very Active - 6-7 times/week', value: 1.95 }
  ];
  d = new Date();
  year = this.d.getFullYear();
  month = this.d.getMonth();
  day = this.d.getDate();
  minDate = new Date(this.year, this.month, this.day + 1);
  maxDate = new Date(this.year + 1, this.month, this.day);
  calories: number;
  public isLoggedIn: boolean;
  message;
  constructor(private planService: PlanService, private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLogged();
    console.log(this.physicalDetails.age);
  }

  DoCheck() {
    this.isLoggedIn = this.authService.isLogged();
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
          this.title = 'Results';
        } else {
          console.log('It is impossible, please select more days');
          this.message = { text: 'It is impossible, please select more days', status: 'no' };
        }
      }, (err) => {
        console.log(err);
        const msg = JSON.parse(err._body);
        this.message = { text: msg.errorMessage, status: 'no' };
      });
  }
  clearMessage() {
    this.message = '';
  }
  goBack(): void {
    this.authService.clearPersonalData();
    this.showForm = true;
  }
}
