import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListOfTodo } from '../listofdata/listofdata.component';
import { TodosserviceService } from '../service/data/todosservice.service';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css'],
})
export class AddTodosComponent implements OnInit {
  constructor(private ser: TodosserviceService, private ro: Router) {}
  todos: any;
  ngOnInit() {
    this.todos = new ListOfTodo(-1, '', '', new Date(), false);
  }
  Add() {
    this.ser.Add(this.todos).subscribe();
    this.ro.navigate(['']);
  }
}
