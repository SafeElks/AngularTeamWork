import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  title = 'Tell us about yourself';
  genders = ['Male', 'Female'];
  activities = [
    'Basal Metabolic Rate (BMR)',
    'Sedentary - little or no exercise',
    'Lightly Active - exercise/sports 1-3 times/week',
    'Moderatetely Active - exercise/sports 3-5 times/week',
    'Very Active - hard exercise/sports 6-7 times/week',
    'Extra Active - very hard exercise/sports or physical job',
  ];
  constructor() { }

  ngOnInit() {
  }

}
