import { TaskItem } from "./type";

export default class Model {


    private storeTasks:Array<TaskItem> = [
        {   
            id:"1tets",
            name: 'test',
            complete: false
        },
        {
            id:"2",
            name: 'test1',
            complete: true
        }
    ]

    public get totalTask():number{
        console.log("totalTask -  this.storeTasks.length - ", this.storeTasks.length);
        return this.storeTasks.length;
    }


    public get taskItems(): TaskItem[]{
        return this.storeTasks;
    }

    public getNumberTasksCompleted():number{
        const tasksCompletedArr = this.storeTasks.filter((item)=> item.complete === true);
        return tasksCompletedArr.length;
     }

    public addTaskItem(item:TaskItem):void{
         this.storeTasks.push(item);
         console.log("item - ", item);
         console.log("this.storeTasks.length - ", this.storeTasks.length);
         console.log("this.storeTasks - ", this.storeTasks);
    }

    public deleteTask(id:string):void{
        const index:number = this.storeTasks.findIndex(item => item.id ===id);
        this.storeTasks.splice(index, 1);
    }

    public editTask(id:string, newName:string):void{
        const index:number = this.storeTasks.findIndex(item => item.id ===id);
        this.storeTasks[index].name = newName;
    }

    public addInfoCompliedTask(id:string):void{
        const index:number = this.storeTasks.findIndex(item => item.id ===id);
        this.storeTasks[index].complete = this.storeTasks[index].complete ? false : true;
    }
}

