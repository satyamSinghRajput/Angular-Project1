import { Component } from '@angular/core';
import {CanActivate} from '@angular/router';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent  {
  constructor (private route: ActivatedRoute, private router: Router) {}
  login() {
    const saveLogData = {isLogged: true, userName: ''};
    window.localStorage.setItem('isLoggedIn', JSON.stringify(saveLogData));
    this.router.navigate(['']);
  }
}
