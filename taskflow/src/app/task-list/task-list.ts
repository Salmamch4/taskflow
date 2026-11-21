import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tasks = [
    {id:1, title:'lire le cour angular'},
    {id:2, title:'installer le CLi'},
    {id:3, title:'creer taskflow'},
  ];

  clear(){
    this.tasks=[];
  }
}
