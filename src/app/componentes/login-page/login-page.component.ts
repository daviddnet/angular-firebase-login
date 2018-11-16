import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginIn(this.email, this.password)
    .then( (res) => {
      this.flashMessage.show('User Logged in', { cssClass : 'alert-success', timeout: 4000 });

      this.router.navigate(['/private']);
    }).catch( (err) => {
      this.flashMessage.show(err.message, { cssClass : 'alert-danger', timeout: 4000 });
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then( (res) => {
      this.router.navigate(['/private']);
    }).catch( (err) => { console.log(err.message); });
  }
}
