import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class data{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  htpresponse(name:any){
    return this.http.get<data>(`http://localhost:8080/udemy/welcome/${name}`);
  }
}
