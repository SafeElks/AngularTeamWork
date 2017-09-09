import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'Login';
  message;
  user: User = new User();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private appRouter: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.message = { text: 'User is already logged in!', status: 'no' };
      this.appRouter.navigateByUrl('');
    }
  }

  onSubmit(form: NgForm) {
    this.userService.loginUser(this.user)
      .map((res) => res.json())
      .subscribe((response: any) => {
        if (!response.name) {
          throw new Error('Something went wrong!');
        }

        this.authService.setLoggedUser(response.name);
        this.authService.setLoggedUserId(response.id);
      }, (err) => {
        const msg = JSON.parse(err._body);
        this.message = { text: msg.errorMessage, status: 'no' };
      }, () => {
        this.appRouter.navigateByUrl('profile');
      });
  }
  clearMessage() {
    this.message = '';
  }
}
