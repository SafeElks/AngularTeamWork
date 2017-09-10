import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-foreignprofile',
  templateUrl: './foreignprofile.component.html',
  styleUrls: ['./foreignprofile.component.css']
})
export class ForeignprofileComponent implements OnInit {
  private sub: any;
  private id: string;

  username: string;
  email: string;
  age: string;
  height: string;
  weight: string;
  gender: string;
  photo: string;
  constructor(
    private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id'];
    });

    this.userService.getProfile(this.id)
      .map((res) => res.json())
      .subscribe((user: any) => {
        this.username = user.name;
        this.email = user.email;
        this.photo = user.photo.secure_url;
        this.age = user.age;
        this.height = user.height;
        this.weight = user.weight;
        this.gender = user.gender === 'true' ? 'Male' : 'Female';
      });
  }

}
