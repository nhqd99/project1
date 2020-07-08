import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private apiUrl = 'https://truonghuynhit-mobilestore.herokuapp.com';
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login = (username: string, password: string) => {
    console.log('Username: ', username, '\nPassword: ', password);
    const loginUrl = `${this.apiUrl}/api/v1/user/signin`;
    console.log('Login endpoint: ', loginUrl);
    return this.http
               .post<any>(loginUrl, {username, password})
               .pipe(
                 map((user) => {
                  if (user) {
                    const newUser = {} as User;
                    newUser.id = user.id;
                    newUser.username = user.username;
                    newUser.password = user.password;
                    newUser.role = user.role;
                    // localStorage.setItem('currentUser', JSON.stringify(newUser));
                    this.currentUserSubject.next(newUser);
                    return user;
                  }

                  return null;
                 })
               )
  }

  public logout = () => {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}