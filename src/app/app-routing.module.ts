import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';
import { ViewActivityComponent } from './view-activity/view-activity.component';
import {CreateActivityComponent} from './create-activity/create-activity.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'activity/:id',component:ViewActivityComponent},
  {path:'createactivity',component:CreateActivityComponent},
  {path: '**', pathMatch: 'full', component:ErrorNotFoundComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
