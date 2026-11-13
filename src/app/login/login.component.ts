import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginServ: AuthService, private router: Router) {}

  submit() {
    this.loginServ.login();
    this.router.navigate(['item-request']);
  }
}
