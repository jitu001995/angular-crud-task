import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaksComponent } from './create-taks/create-taks.component';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
   {
    path:'create-task',
    component:CreateTaksComponent,
    pathMatch:"full",
   },
   {
    path:'show-task',
    component:DisplayTaskComponent,
    pathMatch:"full"
   },
   {
    path:'show-task/update/:id',
    component:UpdateTaskComponent,
    pathMatch:'full'
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
