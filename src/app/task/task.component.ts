import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  day;
  tasks;

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit(): void {
    this.day = this.taskService.day;
    this.tasks = this.taskService.tasks;
  }

  // tslint:disable-next-line:typedef
  onChangeStatus(i: number) {
    this.taskService.onChangeStatus(i);
  }
  // tslint:disable-next-line:typedef
  onChangeUpdated(i: number) {
    this.taskService.onChangeUpdated(i);
  }

  // tslint:disable-next-line:typedef
  onView(id){
    this.router.navigate(['single-task', id]);
  }

}
