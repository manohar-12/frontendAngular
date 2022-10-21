import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListofdataComponent, ListOfTodo } from 'src/app/listofdata/listofdata.component';

@Injectable({
  providedIn: 'root'
})
export class TodosserviceService {

  constructor(private http:HttpClient) { }

  retrieveAll(){
    return this.http.get< ListOfTodo[]>("http://localhost:8081/todos/show");
  }
  deleteTodo(id:any){
    return this.http.delete(`http://localhost:8081/todos/delete/${id}`)
  }
  updateTodo(id:any){
    return this.http.get<ListOfTodo[]>(`http://localhost:8081/todos/Show/${id}`)
  }
  updatedo(todos:any){
    return this.http.put("http://localhost:8081/todos/update",todos)
  }
  Add(todos:any){
    return this.http.post("http://localhost:8081/todos/save",todos)
  }
}
