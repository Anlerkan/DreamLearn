import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/loginUser';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';
import { RegisterUser } from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  path = "http://localhost:3000/api/auth";
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  TOKEN_KEY = "token";
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    this.httpClient.post(this.path + "/login", loginUser, { headers: headers }).subscribe(data => {
      this.saveToken(data['tokenString']);
      this.userToken = data['tokenString'];
      this.decodedToken = this.jwtHelper.decodeToken(data['tokenString']);
      this.router.navigateByUrl('/dashboard')
    })
  }
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    this.httpClient.post(this.path + "/register", registerUser, { headers: headers }).
      subscribe(data => {

      })
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  loggedIn() {
    return tokenNotExpired(this.TOKEN_KEY);
  }
  getCurrentUserId() {
    return this.jwtHelper.decodeToken(localStorage.getItem(this.TOKEN_KEY)).nameid
  }
}
