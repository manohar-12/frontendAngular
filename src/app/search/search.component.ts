import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListOfTodo } from '../listofdata/listofdata.component';
import { TodosserviceService } from '../service/data/todosservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private ser:TodosserviceService
  ) { }
id:any;
todos:any;
  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.todos=new ListOfTodo(1,'','',new Date(),false);
    this.ser.updateTodo(this.id).subscribe(
      data=>this.todos=data
      );
  }

}
