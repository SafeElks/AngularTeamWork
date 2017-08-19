import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: string;
  constructor(private appService: HomeService) { }

  getInfo(): void {
    this.appService.getHomeInfo()
      .then(info => this.info = info);
  }

  ngOnInit(): void {
    this.getInfo();
  }

}
