import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = true;
  isAuthenticated(): boolean{
    return this.loggedIn;
  }
  login(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }


  constructor() { }
}
