import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/login/loginservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   UserName='username'
   Password='password'
  state=false
  constructor(
    private ro:Router,
    private loginser:LoginserviceService
  ) { }

  ngOnInit(): void {
  }
Login(){
if(this.loginser.authenticate(this.UserName,this.Password)){
  this.ro.navigate(['listoftodo'])
}
else{
  this.ro.navigate(['listoftodo'])
  this.state=true
  }

}
}
