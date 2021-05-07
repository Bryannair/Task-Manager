import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  task;
  error;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.task = this.taskService.getTask(id);
    if (!this.task) {
      this.error = 'Identidiant incorrect';
    }
  }

}
