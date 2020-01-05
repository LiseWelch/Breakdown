import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from '../../../../models/project.interface';
import { User } from '../../../../models/user.interface';
import { CheckService } from '../../../../services/check.service';
import { ProjectService } from '../../../../services/project.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() curProject: Project;
  @Input() curUserID;
  @Output() editEmitter = new EventEmitter();

  availUsers: User[];

  userNames: string[] = [];

  constructor(private checkService: CheckService,
              private projectService: ProjectService) { }

ngOnInit() {
}

getNames(eventData) {
    this.userNames = eventData;
}

onSubmit() {
  this.projectService.editProjectName(this.curProject).subscribe(proj => {
    this.editEmitter.emit({tog: false, names: this.userNames});
  });
}
}
