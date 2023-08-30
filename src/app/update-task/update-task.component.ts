import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
   id=0;
   public task={
    taskName:'',
    taskDescription:''
   }
  constructor(
          private _route:ActivatedRoute,
          private taskService:TaskService,
          private router:Router
          ) { }

  ngOnInit(): void {
    this.id=this._route.snapshot.params['id']
    //alert("update "+this.id);
    this.taskService.getTaskById(this.id).subscribe((data:any)=>{
       this.task=data;
       console.log(this.task);
    },(error)=>{
      console.log(error);
    })
  }
  updateTask(){
    //alert(this.task);
    console.log(this.task);
    this.taskService.updateTaskById(this.task).subscribe((data:any)=>{
     console.log(data);
     alert("task is updated successfully");
     this.router.navigate(['/show-task'])
    },(error:any)=>{
      console.log(error);
    })
  }
}
