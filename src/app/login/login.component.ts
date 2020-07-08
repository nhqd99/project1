import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

declare var window: any & Window;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName = 'admin';
  public password = 'admin';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  login = () => {
    this.authenticationService.login(this.userName, this.password).subscribe(
      (data) => {
        if (data && data.username) {
          localStorage.setItem('user', JSON.stringify(data));
          window.user = data;
          console.log('Login Success');
          this.router.navigateByUrl('/');
        } else
          console.error('Login failed!');
      },
      (err) => console.error(err)
    )
  }

  ngOnInit(): void {
    var user = null;
    if (user = localStorage.getItem('user')) {
      window.user = JSON.parse(user);
      this.router.navigateByUrl('/');
      return;
    }
  }

}
