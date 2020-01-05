import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Login } from '../models/login.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post<User>('/api/user/create', user);
  }

  loginUser(login: Login) {
    return this.http.post('/api/user/login', login);
  }

  checkEmail(user: User) {
    return this.http.post('/api/user/email', user);
  }

  checkUsername(user: User) {
    return this.http.post('/api/user/username', user);
  }

  checkPassword(passwords: object) {
    return this.http.post('/api/user/password', passwords);
  }
}
