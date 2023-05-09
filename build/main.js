import View from "./View.js";
const view = new View();
const tasks = document.getElementById('tasks');
const taskText = document.querySelector('#input');
init();
taskText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && taskText?.value.length > 2) {
        view.addNewTask(taskText?.value);
        taskText.value = "";
    }
});
tasks.addEventListener('click', (event) => {
    eventHandlingBtn(event);
});
function init() {
    view.init();
}
function eventHandlingBtn(event) {
    const el = event.target;
    const id = el.getAttribute('btn-item-id');
    const btnAttr = el.getAttribute("btn-name");
    switch (btnAttr) {
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
//# sourceMappingURL=main.js.map