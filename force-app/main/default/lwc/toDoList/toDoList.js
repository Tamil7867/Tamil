import { LightningElement } from 'lwc';

export default class ToDoList extends LightningElement {
    
    task;
    taskList=[];
    handleChangeTask(event){
        this.task=event.target.value;
    }
    handleClickAdd(event){
        let taskId;
        taskId=this.taskList.length;
        taskId++;
        // let taskObj=function(taskId, taskName){
        //     return{
        //     taskId:taskId,
        //     Name:taskName
        //     };
        // };
        //this.taskList.push(taskObj(taskId, this.task))
        let taskObj;
        taskObj={
            taskId:taskId,
            taskName:this.task
        }
        this.taskList=[...this.taskList,taskObj];
        // console.log(JSON.stringify(this.taskList));
        this.task=null;
    }

    get isTaskListEmpty(){
        return this.taskList.length>0
    }

    handleClickDel(event){
        let iconId;
        iconId=event.target.name;
        this.taskList=this.taskList.filter(curTask=>curTask.taskId!=iconId);
        console.log(JSON.stringify(this.taskList));
    }
}