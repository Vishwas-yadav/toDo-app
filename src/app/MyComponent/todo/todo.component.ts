import { Component } from '@angular/core';
import { Todolist } from 'src/app/Todolist';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
      todo:Todolist[];
      constructor(){
        this.todo=[];
        const dataFromLocal=localStorage.getItem("todo");
        if(dataFromLocal!=null){
          this.todo=JSON.parse(dataFromLocal);
        }
        
      }
      deleteTodo=(todoitem:Todolist)=>{
        const inx=this.todo.indexOf(todoitem);
        this.todo.splice(inx,1);
        localStorage.setItem("todo",JSON.stringify(this.todo));
      }
      addNewTodo=(newItem:Todolist)=>{
        this.todo.push(newItem);
        localStorage.setItem("todo",JSON.stringify(this.todo));
      }
      changeStatus=(todoitem:Todolist)=>{
        const inx=this.todo.indexOf(todoitem);
        this.todo[inx].active=!this.todo[inx].active;
        localStorage.setItem("todo",JSON.stringify(this.todo));
      }
}
