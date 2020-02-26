import { Component } from '@angular/core';
import {trigger, animate, style, transition, keyframes} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   trigger('moveInLeft', [
      transition('void=> *', [style({transform: 'translateX(300px)'}),
        animate(200, keyframes([
         style({transform: 'translateX(300px)'}),
         style({transform: 'translateX(0)'})

          ]))]),


          transition('*=>void', [style({transform: 'translateX(0px)'}),
        animate(100, keyframes([
         style({transform: 'translateX(0px)'}),
         style({transform: 'translateX(300px)'})

          ]))])

])

  ]
})
export class AppComponent {
  // create a property in app.component.ts called "formTitle" and initialize the value of the form
  // title to be <Your name> Cool App. e.g "Tosin Cool App";
  todoArray = [];
  todo;
  //todoForm: new FormGroup()


   addTodo(value){
    if (value !== ''){
     this.todoArray.push(value);
   //  todoForm.resetForm()
    //console.log(this.todos)
  }else{
    alert('Field required **')
  }

  }

  /*delete item*/
  deleteItem(todo){
  	for (let i = 0 ; i <= this.todoArray.length ; i++){
  		if (todo == this.todoArray[i]){
  			this.todoArray.splice(i, 1)
  		}
  	}
  }

  // submit Form
  todoSubmit(value: any){
     if (value !== '') {
       const todoValue = value.todo;
    // add the todoValue to the this.todoArray;

    }else{
      alert('Field required **')
    }

  }

}




