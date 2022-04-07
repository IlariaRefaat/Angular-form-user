import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/user';

@Component({
  selector: 'app-table-of-users',
  templateUrl: './table-of-users.component.html',
  styleUrls: ['./table-of-users.component.css']
})
export class TableOfUsersComponent implements OnInit {
  @Input("users") users: User[] = [];
  constructor() {
  }


  ngOnInit(): void {
  }

}
