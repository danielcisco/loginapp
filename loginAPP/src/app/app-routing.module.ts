import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegistroPageComponent} from './components/registro-page/registro-page.component';
import {PrivadoPageComponent} from './components/privado-page/privado-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';




const routes: Routes = [
  { path :'', component: HomePageComponent},
  { path :'login', component: LoginPageComponent},
  { path :'register', component: RegistroPageComponent},
  { path :'privado', component: PrivadoPageComponent},
  { path :'**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
