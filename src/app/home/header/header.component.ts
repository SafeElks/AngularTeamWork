import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public isLoggedIn: boolean;
  title = 'FIT.me';
  coverImg = '../../../assets/images/cover.jpg';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLogged();
  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isLogged();
  }
}
