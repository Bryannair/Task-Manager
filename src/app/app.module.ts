import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskComponent} from './task/task.component';
import {HeaderComponent} from './header/header.component';
import {TaskService} from './services/task.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTaskComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
