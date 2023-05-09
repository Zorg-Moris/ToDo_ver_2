import Controller from "./Controller.js";
import { TaskItem } from "./type";

export default class View {
  private controller: Controller;

  constructor() {
    this.controller = new Controller();
  }

  public init(): void {
    this.loadTasks();
    this.updateTotalInfo();
  }


  private updateTotal(): void {
    const taskTotal = this.controller.totalCountTaskItems;
    const taskCount: Element = document.getElementById('count')!;
     taskCount.innerHTML = `Task: <span>${taskTotal}</span>`;
  };

  private updateCompletedNumber(): void {
    const count:number = this.controller.numberTaskCompleted;
    const taskCompleted: Element = document.getElementById('completed')!;
    taskCompleted.innerHTML = `Completed: <span>${count}</span>`;
  };

  private loadTasks():void{
    const taskItemList: TaskItem[] = this.controller.totalTaskItemsArray;
    for (const item of taskItemList) {
    this.loadNewTask(item);
    }
  }

   private loadNewTask(item:TaskItem):void{
    const tasksContainer:HTMLElement = document.getElementById('tasks')!;

    const divContainer:HTMLDivElement = document.createElement('div');
    divContainer.classList.add("task");
    divContainer.setAttribute('id', item.id);
    
    const elName:HTMLSpanElement = document.createElement("span");
    elName.classList.add("task_name");
    if(item.complete){
      elName.classList.add("completed");
    }
    elName.textContent = item.name;

    const editInput:HTMLInputElement = document.createElement("input");
    editInput.type ="text";
    editInput.classList.add("edit_input");
    editInput.classList.add("hide");
    editInput.value = item.name;
   
    const btn_wrapper:HTMLDivElement = document.createElement('div');
    btn_wrapper.classList.add("btn_wrapper");

    const btn_wrapper_main:HTMLDivElement = document.createElement('div');
    btn_wrapper_main.classList.add("btn_wrapper_main");
  
    const btnDelete:HTMLButtonElement = document.createElement("button");
    btnDelete.classList.add("btn_task");
    btnDelete.textContent = "Delete"
    btnDelete.setAttribute("btn-item-id",item.id);
    btnDelete.setAttribute("btn-name","Delete");
  
    const btnEdit:HTMLButtonElement = document.createElement("button");
    btnEdit.classList.add("btn_task");
    btnEdit.textContent = "Edit";
    btnEdit.setAttribute("btn-item-id",item.id);
    btnEdit.setAttribute("btn-name","Edit");

    const btnCompleted:HTMLButtonElement = document.createElement("button");
    btnCompleted.classList.add("btn_task");
    btnCompleted.textContent = "Completed";
    btnCompleted.setAttribute("btn-item-id",item.id);
    btnCompleted.setAttribute("btn-name","Completed");

    btn_wrapper_main.appendChild(btnDelete);
    btn_wrapper_main.appendChild(btnEdit)
    btn_wrapper_main.appendChild(btnCompleted);

    const btn_wrapper_edit:HTMLDivElement = document.createElement('div');
    btn_wrapper_edit.classList.add("btn_wrapper_edit");
    btn_wrapper_edit.classList.add("hide");

    const btnCancel:HTMLButtonElement = document.createElement("button");
    btnCancel.classList.add("btn_task");
    btnCancel.textContent = "Cancel"
    btnCancel.setAttribute("btn-item-id",item.id);
    btnCancel.setAttribute("btn-name","Cancel");
  
    const btnChangeName:HTMLButtonElement = document.createElement("button");
    btnChangeName.classList.add("btn_task");
    btnChangeName.textContent = "Change";
    btnChangeName.setAttribute("btn-item-id",item.id);
    btnChangeName.setAttribute("btn-name","Change");

    btn_wrapper_edit.appendChild(btnCancel);
    btn_wrapper_edit.appendChild(btnChangeName);

    btn_wrapper.appendChild(btn_wrapper_main);
    btn_wrapper.appendChild(btn_wrapper_edit);

    divContainer.appendChild(elName);
    divContainer.appendChild(editInput);
    divContainer.appendChild(btn_wrapper);
   
    tasksContainer.appendChild(divContainer);
   }

   public addNewTask(taskName:string):void{
    const generateId = this.controller.generateId();
    const newTask:TaskItem = {
      id:generateId,
      name: taskName,
      complete:false
    }  

    this.controller.addTaskItem(newTask);
    this.loadNewTask(newTask);
    this.updateTotal();
   }


  public deleteElTask(id:string):void{
    this.controller.deleteTaskItem(id);
    this.updateTotalInfo();
    let parent = document.getElementById('tasks')!
    let elements = document.getElementsByClassName('task');

   for (const item of elements) {
       if(id === item.id){
        parent.removeChild(item);   
      }
   }    
}

  public editElTask(id:string):void{
    this.toggleElements(id);
  }

  public cancelEdit(id:string):void {
    this.toggleElements(id);
  }

  public changeNameTask(id:string):void{
    const elements = document.getElementsByClassName('task');
    for (const item of elements) {
      if(id === item.id){
        const elTaskName = item.getElementsByClassName("task_name")[0];
        const valueInput = item.getElementsByTagName("input")[0].value;
        elTaskName.textContent = valueInput;
     }
    }   

    this.toggleElements(id);

  }

  public completedTask(id:string):void{
    const elements = document.getElementsByClassName('task');
    for (const item of elements) {
      if(id === item.id){
        const elTaskName = item.getElementsByClassName("task_name")[0];
        elTaskName.classList.toggle("completed");
     }
  }
    this.controller.addInfoCompliedTask(id);
    this.updateCompletedNumber();

}

   private toggleElements(id:string):void{
    const elements = document.getElementsByClassName('task');
  
    for (const item of elements) {
      if(id === item.id){
        const elTaskName = item.getElementsByClassName("task_name")[0];
        const btnWrapperMain= item.getElementsByClassName("btn_wrapper_main")[0];
        const editInput:Element = item.getElementsByTagName("input")[0];
        const btnWrapperEdit:Element = item.getElementsByClassName("btn_wrapper_edit")[0];
        btnWrapperMain.classList.toggle("hide");
        elTaskName.classList.toggle("hide");
        editInput.classList.toggle("hide");
        btnWrapperEdit.classList.toggle("hide");
     }
    }   
   }

   private updateTotalInfo():void{
    this.updateTotal();
    this.updateCompletedNumber();
   }
}

