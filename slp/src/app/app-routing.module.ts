import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './auth/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { TelaLoginComponent } from './components/loginTela/telaLogin.component';

const routes: Routes = [
  
  {path: 'login', component:TelaLoginComponent},
  {path: '', canActivate: [Guard], component: HomeComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
