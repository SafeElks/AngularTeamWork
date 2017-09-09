import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MdPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/table';
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
    this.users = [];
  }

  ngOnInit() {
    this.userService.getUsers()
      .map((res) => res.json())
      .subscribe(res => {
        this.users = res;
        this.dataSource = new UsersDataSource(this.users, this.paginator);
      });
  }
}


export class UsersDataSource extends DataSource<any> {
  constructor(private data: UserData[], private paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this.data,
      this.paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.data.slice();

      // Grab the page's slice of data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    });
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
