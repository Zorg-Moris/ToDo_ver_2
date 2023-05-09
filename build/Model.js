export default class Model {
    storeTasks = [
        {
            id: "1tets",
            name: 'test',
            complete: false
        },
        {
            id: "2",
            name: 'test1',
            complete: true
        }
    ];
    get totalTask() {
        console.log("totalTask -  this.storeTasks.length - ", this.storeTasks.length);
        return this.storeTasks.length;
    }
    get taskItems() {
        return this.storeTasks;
    }
    getNumberTasksCompleted() {
        const tasksCompletedArr = this.storeTasks.filter((item) => item.complete === true);
        return tasksCompletedArr.length;
    }
    addTaskItem(item) {
        this.storeTasks.push(item);
        console.log("item - ", item);
        console.log("this.storeTasks.length - ", this.storeTasks.length);
        console.log("this.storeTasks - ", this.storeTasks);
    }
    deleteTask(id) {
        const index = this.storeTasks.findIndex(item => item.id === id);
        this.storeTasks.splice(index, 1);
    }
    editTask(id, newName) {
        const index = this.storeTasks.findIndex(item => item.id === id);
        this.storeTasks[index].name = newName;
    }
    addInfoCompliedTask(id) {
        const index = this.storeTasks.findIndex(item => item.id === id);
        this.storeTasks[index].complete = this.storeTasks[index].complete ? false : true;
    }
}
//# sourceMappingURL=Model.js.map