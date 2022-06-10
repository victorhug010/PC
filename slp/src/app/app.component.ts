import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slp';

  //Verifica se exite um objeto chamado 'user' no localstorage
  get showMenu() {
    return localStorage.getItem('user') != null;
  }
}
