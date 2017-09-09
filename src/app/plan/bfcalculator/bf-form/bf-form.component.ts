import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-bf-form',
  templateUrl: './bf-form.component.html',
  styleUrls: ['./bf-form.component.css']
})
export class BfFormComponent implements OnInit {


  constructor(private storage: StorageService, private router: Router) {
  }

  ngOnInit(): void {
    
  }


}
