import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password).then(
      (res) => {
        this.flashMessage.show('User created successfully.', { cssClass : 'alert-success', timeout: 4000 });
        this.router.navigate(['/private']);
      }
    ).catch(
      (err) => {
        this.flashMessage.show(err.message, { cssClass : 'alert-danger', timeout: 4000 });
      }
    );
  }
}
