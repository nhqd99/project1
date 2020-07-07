import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userName = 'admin';
  public password = 'admin';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  login = () => {
    this.authenticationService.login(this.userName, this.password).subscribe(
      (data) => {
        if (data != null && data.userName) {
          localStorage.setItem('username', data.userName);
          localStorage.setItem('password', data.password);
          console.log('Login Success');
          this.router.navigateByUrl('/product');
        } else {
          console.log('Login Fail');
        }
      },
      (err) => console.error(err)
    );
  };

  ngOnInit(): void {}
}
