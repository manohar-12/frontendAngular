import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListOfTodo } from '../listofdata/listofdata.component';
import { TodosserviceService } from '../service/data/todosservice.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  constructor(
    private route:ActivatedRoute,
    private ser:TodosserviceService,
    private ro:Router 
    
    ) { }
  id:any;
  todos:any
  
  ngOnInit(){
    this.id=this.route.snapshot.params['id']
    this.todos=new ListOfTodo(1,'','',new Date(),false);
    this.ser.updateTodo(this.id).subscribe(
      data=>this.todos=data
      );
    
    }
  save(){
     this.ser.updatedo(this.todos).subscribe();
     this.ro.navigate([''])
  }
  
}
