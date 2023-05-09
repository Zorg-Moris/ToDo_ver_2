import Controller from "./Controller.js";
export default class View {
    controller;
    constructor() {
        this.controller = new Controller();
    }
    init() {
        this.loadTasks();
        this.updateTotalInfo();
    }
    updateTotal() {
        const taskTotal = this.controller.totalCountTaskItems;
        console.log("taskTotal View - ", taskTotal);
        const taskCount = document.getElementById('count');
        taskCount.innerHTML = `Task: <span>${taskTotal}</span>`;
    }
    ;
    updateCompletedNumber() {
        const count = this.controller.numberTaskCompleted;
        const taskCompleted = document.getElementById('completed');
        taskCompleted.innerHTML = `Completed: <span>${count}</span>`;
    }
    ;
    loadTasks() {
        const taskItemList = this.controller.totalTaskItemsArray;
        for (const item of taskItemList) {
            this.loadNewTask(item);
        }
    }
    loadNewTask(item) {
        const tasksContainer = document.getElementById('tasks');
        const divContainer = document.createElement('div');
        divContainer.classList.add("task");
        divContainer.setAttribute('id', item.id);
        const elName = document.createElement("span");
        elName.classList.add("task_name");
        if (item.complete) {
            elName.classList.add("completed");
        }
        elName.textContent = item.name;
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.classList.add("edit_input");
        editInput.classList.add("hide");
        editInput.value = item.name;
        const btn_wrapper = document.createElement('div');
        btn_wrapper.classList.add("btn_wrapper");
        const btn_wrapper_main = document.createElement('div');
        btn_wrapper_main.classList.add("btn_wrapper_main");
        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn_task");
        btnDelete.textContent = "Delete";
        btnDelete.setAttribute("btn-item-id", item.id);
        btnDelete.setAttribute("btn-name", "Delete");
        const btnEdit = document.createElement("button");
        btnEdit.classList.add("btn_task");
        btnEdit.textContent = "Edit";
        btnEdit.setAttribute("btn-item-id", item.id);
        btnEdit.setAttribute("btn-name", "Edit");
        const btnCompleted = document.createElement("button");
        btnCompleted.classList.add("btn_task");
        btnCompleted.textContent = "Completed";
        btnCompleted.setAttribute("btn-item-id", item.id);
        btnCompleted.setAttribute("btn-name", "Completed");
        btn_wrapper_main.appendChild(btnDelete);
        btn_wrapper_main.appendChild(btnEdit);
        btn_wrapper_main.appendChild(btnCompleted);
        const btn_wrapper_edit = document.createElement('div');
        btn_wrapper_edit.classList.add("btn_wrapper_edit");
        btn_wrapper_edit.classList.add("hide");
        const btnCancel = document.createElement("button");
        btnCancel.classList.add("btn_task");
        btnCancel.textContent = "Cancel";
        btnCancel.setAttribute("btn-item-id", item.id);
        btnCancel.setAttribute("btn-name", "Cancel");
        const btnChangeName = document.createElement("button");
        btnChangeName.classList.add("btn_task");
        btnChangeName.textContent = "Change";
        btnChangeName.setAttribute("btn-item-id", item.id);
        btnChangeName.setAttribute("btn-name", "Change");
        btn_wrapper_edit.appendChild(btnCancel);
        btn_wrapper_edit.appendChild(btnChangeName);
        btn_wrapper.appendChild(btn_wrapper_main);
        btn_wrapper.appendChild(btn_wrapper_edit);
        divContainer.appendChild(elName);
        divContainer.appendChild(editInput);
        divContainer.appendChild(btn_wrapper);
        tasksContainer.appendChild(divContainer);
    }
    addNewTask(taskName) {
        const generateId = this.controller.generateId();
        const newTask = {
            id: generateId,
            name: taskName,
            complete: false
        };
        this.controller.addTaskItem(newTask);
        this.loadNewTask(newTask);
        this.updateTotal();
    }
    deleteElTask(id) {
        this.controller.deleteTaskItem(id);
        this.updateTotalInfo();
        let parent = document.getElementById('tasks');
        let elements = document.getElementsByClassName('task');
        for (const item of elements) {
            if (id === item.id) {
                parent.removeChild(item);
            }
        }
    }
    editElTask(id) {
        this.toggleElements(id);
    }
    cancelEdit(id) {
        this.toggleElements(id);
    }
    changeNameTask(id) {
        const elements = document.getElementsByClassName('task');
        for (const item of elements) {
            if (id === item.id) {
                const elTaskName = item.getElementsByClassName("task_name")[0];
                const valueInput = item.getElementsByTagName("input")[0].value;
                elTaskName.textContent = valueInput;
            }
        }
        this.toggleElements(id);
    }
    completedTask(id) {
        const elements = document.getElementsByClassName('task');
        for (const item of elements) {
            if (id === item.id) {
                const elTaskName = item.getElementsByClassName("task_name")[0];
                elTaskName.classList.toggle("completed");
            }
        }
        this.controller.addInfoCompliedTask(id);
        this.updateCompletedNumber();
    }
    toggleElements(id) {
        const elements = document.getElementsByClassName('task');
        for (const item of elements) {
            if (id === item.id) {
                const elTaskName = item.getElementsByClassName("task_name")[0];
                const btnWrapperMain = item.getElementsByClassName("btn_wrapper_main")[0];
                const editInput = item.getElementsByTagName("input")[0];
                const btnWrapperEdit = item.getElementsByClassName("btn_wrapper_edit")[0];
                btnWrapperMain.classList.toggle("hide");
                elTaskName.classList.toggle("hide");
                editInput.classList.toggle("hide");
                btnWrapperEdit.classList.toggle("hide");
            }
        }
    }
    updateTotalInfo() {
        this.updateTotal();
        this.updateCompletedNumber();
    }
}
//# sourceMappingURL=View.js.map