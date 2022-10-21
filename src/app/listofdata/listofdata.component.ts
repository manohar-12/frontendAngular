import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosserviceService } from '../service/data/todosservice.service';
import { DataserviceService } from '../service/dataservice.service';

export class ListOfTodo{
  constructor(
public id:number,
public username:string,
public description:string,
public trgetdate:Date,
public completed:boolean
  ){}
  
}
@Component({
  selector: 'app-listofdata',
  templateUrl: './listofdata.component.html',
  styleUrls: ['./listofdata.component.css']
})
export class ListofdataComponent implements OnInit {
  todos:ListOfTodo[]=[];
message:any;
name='manohar';

  constructor(private ser:DataserviceService,private serv:TodosserviceService,private ro:Router) { }

  ngOnInit() {
   this.rfefreshtodos();
  }
// Login(){
//   this.ser.htpresponse(this.name).subscribe(
//   response=>this.handlesuccessfulresponse(response));
// } 
// handlesuccessfulresponse(response:any){
//   this.message=response.message;
// }
public rfefreshtodos(){
  this.serv.retrieveAll().subscribe(t=>{
    console.log(t)
    this.todos=t
  })
}
id:number=0;
delete(id:any){
this.serv.deleteTodo(id).subscribe(response=>{
  this.message=`Delete of Todo ${id} is successfull`;
  this.rfefreshtodos();
  console.log(this.message);
  this.id=id;})
}
update(id:number){
console.log("updated id "+id+"successfully");
this.ro.navigate(['update',id]);
}
Add(){
 this.ro.navigate(['add'])
}
}
