import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: '**', pathMatch: 'full', component:ErrorNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
