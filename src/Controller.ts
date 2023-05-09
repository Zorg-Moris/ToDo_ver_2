import Model from "./Model.js";
 import {TaskItem} from './type';

export default class Controller {
  private model:Model;

  constructor(){
    this.model = new Model();
  }


  public get totalTaskItemsArray(): TaskItem[]{
    return this.model.taskItems;
}

public get totalCountTaskItems(): number {
  return this.model.totalTask;
}

public get numberTaskCompleted():number{
  return this.model.getNumberTasksCompleted();
 }

public addTaskItem(item:TaskItem){
  this.model.addTaskItem(item);
}


public deleteTaskItem(id:string){
   this.model.deleteTask(id);
 }

 public editTaskName(id:string, newTaskName:string):void{
  this.model.editTask(id,newTaskName);
 }

 public generateId(length = 6):string {
  return Math.random().toString(36).substring(2,length+2)
 }

 public addInfoCompliedTask(id:string):void{
     this.model.addInfoCompliedTask(id);
 }

}