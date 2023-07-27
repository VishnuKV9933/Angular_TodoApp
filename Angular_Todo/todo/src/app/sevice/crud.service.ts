import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  servieceUrl:string;

  constructor(private http : HttpClient) { 
    this.servieceUrl='http://localhost:3000/tasks'
  }

  addTask(task:Task) :Observable<Task>{
    return this.http.post<Task>(this.servieceUrl,task)
  }

  getAllTasks () :Observable<Task[]>{
    return this.http.get<Task[]>(this.servieceUrl)
  }
  editTask (task:Task) :Observable<Task>{
    console.log(task);
    
    return this.http.put<Task>(this.servieceUrl+'/'+task.id,task)
  }
  markTask (task:Task) :Observable<Task>{
    return this.http.put<Task>(this.servieceUrl+'/mark'+task.id,task)
  }
  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(this.servieceUrl+'/'+task.id)
  }
}
