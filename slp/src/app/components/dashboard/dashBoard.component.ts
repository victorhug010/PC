import { Component, } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.scss']
})
export class DashBoardComponent {
  showmenu = true

  doLogout() {
    localStorage.removeItem('user');
  }
  get usuario(){
    
  let ret=localStorage.getItem('user');
  let user= JSON.parse(ret as string);
  return user.username
  }
}