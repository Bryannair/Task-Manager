import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {TaskComponent} from './task/task.component';
import {SingleTaskComponent} from './single-task/single-task.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'task', component: TaskComponent },
  {path: 'single-task/:id', component: SingleTaskComponent },
  {path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
