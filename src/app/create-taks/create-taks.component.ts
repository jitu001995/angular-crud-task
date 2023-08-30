import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create-taks',
  templateUrl: './create-taks.component.html',
  styleUrls: ['./create-taks.component.css']
})
export class CreateTaksComponent implements OnInit {
    public task={
    taskName:'',
    taskDescription:''
   }
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  public formSubmit(){
     if(this.task.taskName =='' || this.task.taskDescription ==''){
      alert('task is required');
      return;
     }else{
      this.taskService.addTask(this.task).subscribe((data:any)=>{
        console.log(data);
        alert("Success Task is Created");
        this.task={
          taskName:'',
          taskDescription:''
        }
      },(error)=>{
          console.log(error);
          alert("something went wrong");
      })
     }
  }
  public resetForm(){
    this.task.taskName='',
     this.task.taskDescription=''
    
  }

}
