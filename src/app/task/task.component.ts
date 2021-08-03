import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task = {
    title: 'Review applications',
    assignee: {
      name: 'Cameron'
    }
  };
}
