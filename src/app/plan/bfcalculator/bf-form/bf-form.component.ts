import {Component, OnInit} from '@angular/core';
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

  private bodyFatKey = "body-fat-data";

  constructor(private storage: StorageService, private router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit(form: any): void {
    const data = JSON.stringify(form);
    this.storage.add(this.bodyFatKey, data);
    // nav to calorie calculator route
    this.router.navigate(['']);
  }
}
