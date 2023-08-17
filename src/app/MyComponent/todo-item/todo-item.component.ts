import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todolist } from 'src/app/Todolist';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoi:Todolist
  @Output() deleteTodoi:EventEmitter<Todolist>=new EventEmitter();
  @Output() changeActiveStatus:EventEmitter<Todolist>=new EventEmitter();
  constructor(){
  }
  onClick=(todoi:Todolist)=>{
    const cnfrm=confirm("Are you sure you want to Delete?");
    if(cnfrm)
    this.deleteTodoi.emit(todoi); 
  }
  checkBoxClicked=(todoi:Todolist)=>{
    this.changeActiveStatus.emit(todoi);
  }
}
