import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {
  public dataSource:any=[]
  displayedColumns:string[]=['Id','Name','description','Edit','Delete']
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getAllTask();
  }
   
  public getAllTask(){
    this.taskService.getAllTask().subscribe((data:any)=>{
     console.log(data);
     this.dataSource=data;
    },(error)=>{

    });
  }

  public deleteTask(taskId:any){
    this.taskService.deleteTaskById(taskId).subscribe((data:any)=>{
      this.dataSource=this.dataSource.filter((dt:any)=> dt.id!=taskId);
    },(error)=>{
      alert("error in deleting quiz");
      console.log(error);
    })
  }
  
}
