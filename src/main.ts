import View from "./View.js";

const view:View = new View();
const tasks:HTMLElement = document.getElementById('tasks')!;
const taskText:HTMLInputElement = document.querySelector('#input')!;

init();


taskText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && taskText?.value.length >2) {
    view.addNewTask(taskText?.value);
    taskText.value = "";
    }
  });


  tasks.addEventListener('click', (event:Event)=>{
      eventHandlingBtn(event);
  });


  function init():void {
    view.init();
   }

  function eventHandlingBtn(event:Event){
     const el:HTMLElement = event.target as HTMLElement;
      const id = el.getAttribute('btn-item-id')!;
      const btnAttr = el.getAttribute("btn-name");

     switch(btnAttr) {
        case 'Delete':
        view.deleteElTask(id);
        break;

        case 'Edit':
            view.editElTask(id);
            break;

        case 'Cancel':
            view.cancelEdit(id);
            break;

         case 'Change':
            view.changeNameTask(id);
            break;

         case 'Completed':
           view.completedTask(id);
           break;
     }
  }
