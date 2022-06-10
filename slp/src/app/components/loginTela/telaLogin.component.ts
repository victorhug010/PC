import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'telaLogin',
  templateUrl: './telaLogin.component.html',
  styleUrls: ['./telaLogin.component.scss']
})
export class TelaLoginComponent {
  username = '';
  password = '';

  //Construtor iniciando o router para aplicar 'Router'
  constructor(private router: Router) {
    //Limpa o localstorage quando inicia o componente
    localStorage.clear();
  }

  //Adiciona usuario no localstorage e navega para pagina inicial
  login() {
    localStorage.setItem('user', JSON.stringify({ username: this.username, password: this.password }));
    this.router.navigate(['']);
  }
}