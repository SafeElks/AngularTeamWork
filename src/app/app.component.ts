import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  info: string;
  constructor(private appService: AppService) { }

  getInfo(): void {
    this.appService.getInfo()
      .then(info => this.info = info);
  }

  ngOnInit(): void {
    this.getInfo();
  }
}
