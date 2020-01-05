import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor( private http: HttpClient ) { }

  getUser(id: string) {
    return this.http.get<User>(`/api/user/${id}`);
  }

  getAllProjects(id: string) {
    return this.http.get<Project[]>(`/api/project/all/${id}`);
  }

}
