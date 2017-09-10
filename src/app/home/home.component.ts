import { Component, OnInit, DoCheck } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  info: string;
  public isLoggedIn: boolean;
  logos = [{
    logoUrl: '../../assets/images/healthy.png', text: 'Eat Healthy'
  }, {
    logoUrl: '../../assets/images/exercise.png', text: 'Exercise'
  }, {
    logoUrl: '../../assets/images/super.png', text: 'Superman'
  }];

  small = window.innerWidth < 425 ? true : false;
  constructor(private appService: HomeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLogged();
    this.appService.getHomeInfo()
      .map((res) => res.json())
      .subscribe((response: any) => {
        this.info = response.info;
      });
    console.log(this.small);
  }
  ngDoCheck() {
    this.isLoggedIn = this.authService.isLogged();
  }
}
