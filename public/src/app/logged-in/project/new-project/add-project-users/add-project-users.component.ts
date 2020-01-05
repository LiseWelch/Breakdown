import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../../../models/user.interface';
import { ProjectService } from '../../../../services/project.service';
import { CheckService } from '../../../../services/check.service';

@Component({
  selector: 'app-add-project-users',
  templateUrl: './add-project-users.component.html',
  styleUrls: ['./add-project-users.component.scss']
})
export class AddProjectUsersComponent implements OnInit {

  projectUserNames: string[];
  projectUserIds: string[];
  allUsers: User[];
  curUserID: string;
  addUser: User;
  idString = '';

  @Output() giveUsers = new EventEmitter();

  constructor(private projectService: ProjectService, private checkService: CheckService) { }

  ngOnInit() {
    this.checkService.getUser().subscribe(info => {
      this.curUserID = info[Object.keys(info)[0]];
      this.projectService.getAllUsersBut(this.curUserID).subscribe(users => {
        this.allUsers = users;
        this.addUser = users[0];
        this.idString = users[0]._id;
      });
    });
    this.projectUserIds = [];
    this.projectUserNames = [];
  }

  onSubmit() {
    if (this.projectUserIds.indexOf(this.idString) < 0) {
      console.log('New: ' + this.idString);
      this.projectUserIds.push(this.idString);
      this.projectService.getUser(this.idString).subscribe(user => {
          this.projectUserNames.push(user.userName);
      });
      this.giveUsers.emit(this.projectUserIds);
    } else {
      console.log('Old: ' + this.idString);
    }
  }

}
