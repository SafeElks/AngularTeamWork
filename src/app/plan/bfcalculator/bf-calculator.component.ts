import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-bf-calculator',
  templateUrl: './bf-calculator.component.html',
  styleUrls: ['./bf-calculator.component.css']
})
export class BfCalculatorComponent implements OnInit {
  title = 'Body Fat Calculator';
  height: string;
  neck: string;
  waist: string;
  hip: string;
  result = 0;
  private bodyFatKey = "body-fat-data";

  constructor(private storage: StorageService, private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit(form: any): void {
    const data = JSON.stringify(form);
    this.storage.add(this.bodyFatKey, data);
    // nav to calorie calculator route
    this.router.navigate(['']);
  }
}
