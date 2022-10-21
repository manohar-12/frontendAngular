import { Component, OnInit } from '@angular/core';
import { Register } from '../register';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  constructor() {}

  data: any;
  user: any;
  password = '';
  cpassword = '';
  state = false;
  ngOnInit() {
    this.data = new Register('0', this.user, this.password, new Date());
    if (this.password != this.cpassword) {
      this.state=true;
    } 
  }
register(){
    
}
    
}
