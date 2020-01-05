import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Check } from '../models/check.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private http: HttpClient) { }

  logginUser(id: string ) {
    return this.http.post<Check>(`/check/loggin`, {userID: id});
  }

  checkLoggin() {
    return this.http.get<Check>('/check/user');
  }

  getUser() {
    return this.http.get('/check/id');
  }

}
