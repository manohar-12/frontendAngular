import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { LoginserviceService } from './service/login/loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ro:Router,
  public  loginser:LoginserviceService
    ){}
  title = 'backend';
  id:any;
  geturl(){
    return "url(https://pixabay.com/illustrations/artificial-intelligence-brain-think-3382507/)"
  }
  search(){
    this.ro.navigate(['search',this.id])
  }
  logout(){
    this.loginser.Logout();
    this.ro.navigate(['home'])
  }
  register(){
    this.ro.navigate(['register'])
  }
}
