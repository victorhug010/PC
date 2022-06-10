import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TelaLoginComponent } from './components/loginTela/telaLogin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: TelaLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
