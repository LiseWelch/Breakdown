import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../models/project.interface';
import { User } from '../../../models/user.interface';
import { CheckService } from '../../../services/check.service';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  newProject: Project;
  users: string[];


  constructor(private rout: ActivatedRoute,
              private router: Router,
              private checkService: CheckService,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.checkService.getUser().subscribe(id => {
      this.newProject = {
        adminID: id[Object.keys(id)[0]],
        projectName: 'New Project',
        projectUsers: []
      };
    });
    }

    getUsers(userdata: string[]) {
      this.newProject.projectUsers = userdata;
    }

    onSubmit() {
      this.newProject.projectUsers.push(this.newProject.adminID);
      this.projectService.createProject(this.newProject).subscribe(proj => {
        this.router.navigate([`/breakdown/projects/view/${proj._id}`]);
      });
    }

  }

