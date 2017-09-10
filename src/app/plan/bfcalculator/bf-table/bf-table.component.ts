import {Component, OnInit} from '@angular/core';
import {DataSource} from "@angular/cdk";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-bf-table',
  templateUrl: './bf-table.component.html',
  styleUrls: ['./bf-table.component.css']
})

export class BfTableComponent implements OnInit {
  displayedColumns = ['Description', 'Women', 'Men'];
  dataSource = new BfTableDataSource();

  constructor() {
  }

  ngOnInit(): void {
    const firstRow = {
      description: 'Essential fat',
      women: '12-15%',
      men: '2-5%',
    } as BfRow;

    const secondRow = {
      description: 'Athletes',
      women: '16-20%',
      men: '6-13%',
    } as BfRow;

    const thirdRow = {
      description: 'Fitness',
      women: '21-24%',
      men: '14-17%',
    } as BfRow;

    const fourthRow = {
      description: 'Acceptable',
      women: '25-31%',
      men: '18-25%',
    } as BfRow;

    const fifthRow = {
      description: 'Obese',
      women: '32%+',
      men: '25%+',
    } as BfRow;

    data.push(firstRow);
    data.push(secondRow);
    data.push(thirdRow);
    data.push(fourthRow);
    data.push(fifthRow);
  }
}

const data: BfRow[] = [];

export interface BfRow {
  description: string;
  women: string;
  men: string;
}

export class BfTableDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<BfRow[]> {
    return Observable.of(data);
  }

  disconnect() {}
}


