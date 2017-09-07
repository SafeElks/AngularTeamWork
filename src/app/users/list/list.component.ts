import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MdPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  displayedColumns = ['userName', 'email', 'password', 'info'];
  users: Array<any>;
  dataSource: UsersDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .map((res) => res.json())
      .subscribe(res => {
        this.users = res;
        this.dataSource = new UsersDataSource(this.users);
      });
  }
}


export class UsersDataSource extends DataSource<any> {
  constructor(private data: UserData[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    return Observable.of(this.data);
  }

  disconnect() {
  }
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  info: string;
}
