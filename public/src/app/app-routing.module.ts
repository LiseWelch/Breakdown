import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInComponent } from './logged-in/logged-in.component';
import { DashComponent } from './logged-in/dash/dash.component';
import { InfoComponent } from './logged-in/info/info.component';
import { ProjectComponent } from './logged-in/project/project.component';
import { NewProjectComponent } from './logged-in/project/new-project/new-project.component';
import { ViewComponent } from './logged-in/project/view/view.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [

   { path: 'breakdown', component: LoggedInComponent, children: [
    { path: 'dash', component: DashComponent },
    { path: 'info', component: InfoComponent },
    { path: 'projects', component: ProjectComponent, children: [
      { path: 'new', component: NewProjectComponent },
      { path: 'view/:id', component: ViewComponent }
    ]}
   ]},
  { path: 'login', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
