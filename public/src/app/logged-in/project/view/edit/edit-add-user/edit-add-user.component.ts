import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../../../../models/user.interface';
import { Project } from '../../../../../models/project.interface';
import { ProjectService } from '../../../../../services/project.service';
import { CheckService } from '../../../../../services/check.service';

@Component({
  selector: 'app-edit-add-user',
  templateUrl: './edit-add-user.component.html',
  styleUrls: ['./edit-add-user.component.scss']
})
export class EditAddUserComponent implements OnInit {

  @Input() curProject: Project;
  @Input() curUserID;

  @Output() emitNames = new EventEmitter();

  userNames: string[] = [];

  allUsers: User[];
  idString: string;

  constructor(private checkService: CheckService,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.checkService.getUser().subscribe(info => {
      this.curUserID = info[Object.keys(info)[0]];
      this.projectService.getAllUsersBut(this.curUserID).subscribe(users => {
        this.allUsers = users;
        this.idString = users[0]._id;
      });
    });
    this.curProject.projectUsers.forEach(user => {
      this.userNames.push(user.userName);
    });
  }

  onSubmit() {
    this.projectService.addUserToProject(this.curProject._id, this.idString).subscribe(proj => {
        this.projectService.getUser(this.idString).subscribe(user => {
          this.userNames.push(user.userName);
          this.emitNames.emit(this.userNames);
        });
    });
  }

}
