import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CheckService } from '../../services/check.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser: User = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  };

  emailErr: string;
  usernameErr: string;


  constructor(private rout: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private checkService: CheckService) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.loginService.checkEmail(this.newUser);
    if (Object.keys(email)[0] === 'email_err') {
        this.emailErr = email[Object.keys(email)[0]];
    } else {
      const username = this.loginService.checkUsername(this.newUser);
      if (Object.keys(username)[0] === 'username_err') {
        this.usernameErr = username[Object.keys(username)[0]];
      } else {
        this.loginService.createUser(this.newUser).subscribe( data => {
        this.checkService.logginUser(data._id).subscribe(info => {});
        this.router.navigate(['/breakdown/dash']);
      });
      }
    }
  }
}
