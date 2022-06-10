import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'telaLogin',
  templateUrl: './telaLogin.component.html',
  styleUrls: ['./telaLogin.component.scss']
})
export class TelaLoginComponent implements OnInit{

  constructor(public router: Router) { }
  usernameError: Boolean = false;
  passwordError: Boolean = false;

  ngOnInit(): void {
    this.user = new User('', '');
  }
  public user: User | undefined;


  setUsername(event: any) {
    this.user?.setUsername(event);
  }

  setPassword(event: any) {
    this.user?.setPassword(event);
  }

  doLogin() {
    this.usernameError = false;
    this.passwordError = false;
    
    if (this.user == null) {
      console.log("User not detected.");
      this.usernameError = true;
      return;
    }
    if (this.user?.username == null || this.user.username == '') {
      console.log("Type a user");
      this.usernameError = true;
      return;
    }
    if (this.user?.password == null || this.user.password == '') {
      console.log("Type a password");
      this.passwordError = true;
      return;
    }

    localStorage.setItem('user', JSON.stringify(this.user));
  }

  doLogout() {
    localStorage.removeItem('user');
  }

  @Input()
  label: String='';
  
  @Input()
  disabled = false;

  
}

class User {
  password: String;
  username: String;

  constructor(username: String, password: String) {
    this.password = password;
    this.username = username;
  }

  setUsername(username: String) {
    this.username = username;
  }
  setPassword(password: String) {
    this.password = password;
  }

  
}
