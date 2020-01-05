import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './services/login.service';
import { ProjectService } from './services/project.service';
import { DashService } from './services/dash.service';
import { CheckService } from './services/check.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './logged-in/dash/profile/profile.component';
import { RecentlyCompletedComponent } from './logged-in/dash/recently-completed/recently-completed.component';
import { UpcomingComponent } from './logged-in/dash/upcoming/upcoming.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { InfoComponent } from './logged-in/info/info.component';
import { DashComponent } from './logged-in/dash/dash.component';
import { ProjectComponent } from './logged-in/project/project.component';
import { ListComponent } from './logged-in/project/list/list.component';
import { AppInfoComponent } from './home/app-info/app-info.component';
import { NewProjectComponent } from './logged-in/project/new-project/new-project.component';
import { AddProjectUsersComponent } from './logged-in/project/new-project/add-project-users/add-project-users.component';
import { ViewComponent } from './logged-in/project/view/view.component';
import { EditComponent } from './logged-in/project/view/edit/edit.component';
import { EditAddUserComponent } from './logged-in/project/view/edit/edit-add-user/edit-add-user.component';
import { AddTaskComponent } from './logged-in/project/list/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RecentlyCompletedComponent,
    UpcomingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoggedInComponent,
    InfoComponent,
    DashComponent,
    ProjectComponent,
    ListComponent,
    AppInfoComponent,
    NewProjectComponent,
    AddProjectUsersComponent,
    ViewComponent,
    EditComponent,
    EditAddUserComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CheckService,
    LoginService,
    ProjectService,
    DashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
