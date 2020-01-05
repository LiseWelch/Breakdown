import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.interface';

@Component({
  selector: 'app-recently-completed',
  templateUrl: './recently-completed.component.html',
  styleUrls: ['./recently-completed.component.scss']
})
export class RecentlyCompletedComponent implements OnInit {

  @Input() curUser: User;
  
  constructor() { }

  ngOnInit() {
  }

}
