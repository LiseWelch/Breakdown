import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './models/user.interface';
import { CheckService } from './services/check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private checkService: CheckService) {}

  ngOnInit() {
    // this.checkService.checkLoggin().subscribe(data => {
    //   if (!data[Object.keys(data)[0]]) {
    //     this.router.navigate(['/home']);
    //   }
    // });
  }

}
