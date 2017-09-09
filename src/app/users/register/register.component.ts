import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Register';
  private user: User = new User();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private appRouter: Router) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      console.log('User is already logged in!');

      this.appRouter.navigateByUrl('');
    }
  }

  onSubmit(): void {
    const personalData = this.authService.getPersonalData();

    this.user.gender = personalData.gender;
    this.user.weight = personalData.weight;
    this.user.height = personalData.height;
    this.user.age = personalData.age;
    this.user.dreamKg = personalData.dreamKg;

    this.authService.clearPersonalData();
    this.userService.registerUser(this.user)
      .map((res) => res.json())
      .subscribe((responseUser: any) => {
          console.log('Congrats, you are registered!');
        }, (err) => {
          console.log(err);
        },
        () => {
          this.appRouter.navigateByUrl('login');
        });
  }

}
