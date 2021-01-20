import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { AuthService } from './services/auth.service';
import { ViewActivityComponent } from './view-activity/view-activity.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeService } from './services/employee.service';
<<<<<<< HEAD
import {ActivityService }  from './services/activity.service';
=======
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
>>>>>>> develop
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorNotFoundComponent,
    ViewActivityComponent,
    ListEmployeeComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    EmployeeService,
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
