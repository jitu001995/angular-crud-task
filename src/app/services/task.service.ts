import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  public addTask(task:any){
    return this.http.post(`${baseUrl}/`,task);
  }
  public getAllTask(){
    return this.http.get(`${baseUrl}/`);
  }
  public getTaskById(id:any){
    //alert(id);
    return this.http.get(`${baseUrl}/${id}`);
  }
  public deleteTaskById(id:any){
    return this.http.delete(`${baseUrl}/${id}`)
  }
  public updateTaskById(task:any){
    return this.http.put(`${baseUrl}/${task.id}`,task);
  }
}
