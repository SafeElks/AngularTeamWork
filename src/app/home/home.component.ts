import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: string;
  logos = [{
    logoUrl: '../../assets/images/healthy.png', text: 'Eat Healthy'
  }, {
    logoUrl: '../../assets/images/exercise.png', text: 'Exercise'
  }, {
    logoUrl: '../../assets/images/super.png', text: 'Superman'
  }];

  small = window.innerWidth < 425 ? true : false;
  constructor(private appService: HomeService) { }

  ngOnInit(): void {
    this.appService.getHomeInfo()
      .map((res) => res.json())
      .subscribe((response: any) => {
        this.info = response.info;
      });
      console.log(this.small);
  }
}
