import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
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
  message;

  private user: User = new User();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private appRouter: Router) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      console.log('User is already logged in!');
      this.message = { text: 'User is already logged in!', status: 'no' };

      this.appRouter.navigateByUrl('');
    }
  }

  onSubmit(form: NgForm): void {
    this.userService.registerUser(this.user)
      .map((res) => res.json())
      .subscribe((responseUser: any) => {
        console.log('Congrats, you are registered!');
        this.message = { text: 'Contrats, you are registered!', status: 'yes' };
      }, (err) => {
        console.log(err);
        const msg = JSON.parse(err._body);
        this.message = { text: msg.errorMessage, status: 'no' };
      },
      () => {
        setTimeout((router: Router) => {
          this.appRouter.navigate(['login']);
      }, 2000);
      });
  }
}
