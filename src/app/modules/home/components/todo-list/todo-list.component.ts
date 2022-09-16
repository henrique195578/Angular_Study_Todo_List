import { SubmittedItem } from './../../model/submitted-item';
import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../model/task-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskItem> = [
    { task: 'Task 01', checked: false },
    { task: 'Task 02', checked: false },
  ];

  constructor() {}
  ngOnInit(): void {}

  public addItem(submittedItem: SubmittedItem) {
    if (submittedItem.index != undefined)
      this.taskList[submittedItem.index].task = submittedItem.task;
    else
      this.taskList.push({
        task: submittedItem.task,
        checked: false,
      });
  }
}
