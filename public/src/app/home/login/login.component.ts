import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login.interface';
import { User } from '../../models/user.interface';
import { LoginService } from '../../services/login.service';
import { CheckService } from '../../services/check.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  newLogin: Login = {
    email: '',
    password: ''
  };

  emailErr: string;
  passwordErr: string;

  constructor(private loginService: LoginService,
              private checkService: CheckService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.loginUser(this.newLogin).subscribe(data => {
      if (Object.keys(data)[0] === 'email_err') {
        this.emailErr = data[Object.keys(data)[0]];
      } else {
        if (Object.keys(data)[0] === 'check') {
          this.passwordErr = 'Password is incorrect.';
        } else {
          this.checkService.logginUser(data[Object.keys(data)[0]]).subscribe(info => {});
          this.router.navigate(['/breakdown/dash']);
        }
      }
    });
  }

}

