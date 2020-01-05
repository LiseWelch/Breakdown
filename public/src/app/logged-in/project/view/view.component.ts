import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project.interface';
import { User } from '../../../models/user.interface';
import { ProjectList } from '../../../models/list.interface';
import { ProjectService } from '../../../services/project.service';
import { CheckService } from '../../../services/check.service';
import { Routes, RouterModule, Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  curProject: Project;

  projLists: ProjectList[];

  curUserID: string;

  editOn: false;

  listOn: false;

  userNames: string[] = [];

  constructor(private projectService: ProjectService,
              private checkService: CheckService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.checkService.getUser().subscribe(id => {
      this.curUserID = id[Object.keys(id)[0]];
    });
    this.route.params.subscribe(params => {
      this.projectService.getProject(params.id).subscribe(proj => {
        this.curProject = proj;
      });
    });
  }

  toggleEdit(eventData) {
    this.editOn = eventData.tog;
    this.userNames = eventData.names;
    this.route.params.subscribe(params => {
      this.projectService.getProject(params.id).subscribe(proj => {
        this.curProject = proj;
      });
    });
  }

  deleteProj() {
    this.projectService.deleteProject(this.curProject._id).subscribe( data => {
      this.router.navigate([`/breakdown/dash`]);
    });
  }

}
