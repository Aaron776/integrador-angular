import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ViewActivityComponent } from './view-activity/view-activity.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'activity/:id/:name/:lastName', component: ViewActivityComponent },  
  { path: '**', pathMatch: 'full', component: ErrorNotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
