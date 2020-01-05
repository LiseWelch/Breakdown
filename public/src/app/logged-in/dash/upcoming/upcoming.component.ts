import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.interface';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  @Input() curUser: User;

  constructor() { }

  ngOnInit() {
  }

}
