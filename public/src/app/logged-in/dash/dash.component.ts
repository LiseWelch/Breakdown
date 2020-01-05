import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { CheckService } from '../../services/check.service';
import { DashService } from '../../services/dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  curUser: User;

  constructor(private checkService: CheckService, private dashService: DashService) { }

  ngOnInit() {
    this.checkService.getUser().subscribe(id => {
      this.dashService.getUser(id[Object.keys(id)[0]]).subscribe(user => {
        this.curUser = user;
      });
    });
  }

}
