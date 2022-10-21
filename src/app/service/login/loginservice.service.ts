import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  
  user: any;
  authenticate(username: any, password: any) {
    if (username == 'User' && password == 'Password') {
      sessionStorage.setItem('item', username);
      this.user=sessionStorage.getItem('item')
    return true
    }
    else
    return false
  }
  isuserlogedin() {
    let user = sessionStorage.getItem('item');
    if (user == null) return false;
    else return true;
  }
  Logout() {
    sessionStorage.removeItem('item');
  }
  constructor() {}
}
