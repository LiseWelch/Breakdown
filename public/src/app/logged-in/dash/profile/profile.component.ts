import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.interface';
import { CheckService } from '../../../services/check.service';
import { DashService } from '../../../services/dash.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() curUser: User;

  constructor(private dashService: DashService, private checkService: CheckService) { }

  ngOnInit() {
    this.checkService.getUser().subscribe(id => {
      this.dashService.getUser(id[Object.keys(id)[0]]).subscribe(user => {
        this.curUser = user;
      });
    });
  }

}
