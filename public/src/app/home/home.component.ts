import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  curUser: User;

  @Output() UserEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userFromChild(data) {
    this.curUser = data;
    this.UserEmitter.emit(this.curUser);
  }

}
