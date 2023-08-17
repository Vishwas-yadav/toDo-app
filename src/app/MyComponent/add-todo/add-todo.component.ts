import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:String;
  desc:String;
  successVisible:boolean=true;
  errorTitle:boolean=true;
  @Output() addtodo:EventEmitter<any> =new EventEmitter();
  onSubmit=()=>{
    console.log("tit:",this.title);
    if(!this.title){
      this.errorTitle=false;
      return;
    }
    const newtodo={
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.addtodo.emit(newtodo);
    this.successVisible=false;
    setTimeout(()=>{
      this.successVisible=true;
    },2000)
    this.title="";
    this.desc="";
  }
  clickedTitle=()=>{
    this.errorTitle=true;
  }
}
