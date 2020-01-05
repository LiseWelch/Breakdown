import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.interface';
import { DashService } from '../services/dash.service';
import { Project } from '../models/project.interface';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  HomeClicked = true;
  ProjectsClicked = false;
  InfoClicked = false;

  userProjects: Project[];

  curUser: User;

  constructor(private route: ActivatedRoute, private router: Router,
              private dashService: DashService,
              private checkService: CheckService) {

  }

  ngOnInit() {
    this.checkService.getUser().subscribe(id => {
      this.dashService.getUser(id[Object.keys(id)[0]]).subscribe( user => {
        this.curUser = user;
        this.dashService.getAllProjects(user._id).subscribe(projs => {
          console.log(projs[0].projectName);
          this.userProjects = projs;
        });
      });
    });
  }

  logout() {
    this.router.navigate([`/home`]);
  }

}
