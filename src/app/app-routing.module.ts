import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'listemployee',component:ListEmployeeComponent},
  {path: '**', pathMatch: 'full', component:ErrorNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
