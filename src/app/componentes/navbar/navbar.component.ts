import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;
  public userName: string;
  public emailUserName: string;
  public userPhoto: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getLoggedUserInfo().subscribe(
      auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.emailUserName = auth.email;
          this.userName = auth.displayName;
          this.userPhoto = auth.photoURL;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  onClickLogOut() {
    this.authService.logOut();
    console.log('logged out!');
  }
}
