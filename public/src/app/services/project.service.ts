import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Project } from '../models/project.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllUsersBut(id: string) {
    return this.http.get<User[]>(`/api/user/but/${id}`);
  }

  createProject(project: Project) {
    return this.http.post<Project>('/api/project/create', project);
  }

  getProject(id: string) {
    return this.http.get<Project>(`/api/project/${id}`);
  }

  editProjectName(project: Project) {
    return this.http.put(`/api/project/edit/${project._id}`, project);
  }

  getUser(id: string) {
    return this.http.get<User>(`/api/user/${id}`);
  }

  addUserToProject(projID: string, userID: string) {
    return this.http.put<Project>(`/api/project/add/user/${projID}`, {id: userID});
  }

  deleteProject(id: string) {
    return this.http.delete(`/api/project/remove/${id}`);
  }
}
