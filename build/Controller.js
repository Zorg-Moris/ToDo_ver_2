import Model from "./Model.js";
export default class Controller {
    model;
    constructor() {
        this.model = new Model();
    }
    get totalTaskItemsArray() {
        return this.model.taskItems;
    }
    get totalCountTaskItems() {
        console.log('this.model.totalTasks - ', this.model.totalTask);
        return this.model.totalTask;
    }
    get numberTaskCompleted() {
        return this.model.getNumberTasksCompleted();
    }
    addTaskItem(item) {
        this.model.addTaskItem(item);
    }
    deleteTaskItem(id) {
        this.model.deleteTask(id);
    }
    editTaskName(id, newTaskName) {
        this.model.editTask(id, newTaskName);
    }
    generateId(length = 6) {
        return Math.random().toString(36).substring(2, length + 2);
    }
    addInfoCompliedTask(id) {
        this.model.addInfoCompliedTask(id);
    }
}
//# sourceMappingURL=Controller.js.map