import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  day = new Date();
  tasks = [
    {
      taskName: 'Tâche n°1',
      taskStatus: true,
      image: 'https://i2.wp.com/www.politico.cd/wp-content/uploads/2016/07/typography-page-img1.jpg?resize=150%2C150&ssl=1',
      isUpdated: false
    },
    {
      taskName: 'Tâche n°2',
      taskStatus: false,
      image: 'https://i2.wp.com/www.politico.cd/wp-content/uploads/2016/07/typography-page-img1.jpg?resize=150%2C150&ssl=1',
      isUpdated: false
    },
    {
      taskName: 'Tâche n°3',
      taskStatus: false,
      image: 'https://i2.wp.com/www.politico.cd/wp-content/uploads/2016/07/typography-page-img1.jpg?resize=150%2C150&ssl=1',
      isUpdated: false
    },
    {
      taskName: 'Tâche n°4',
      taskStatus: false,
      image: 'https://i2.wp.com/www.politico.cd/wp-content/uploads/2016/07/typography-page-img1.jpg?resize=150%2C150&ssl=1',
      isUpdated: false
    }
  ];

  // tslint:disable-next-line:typedef
  onChangeStatus(i: number) {
    this.tasks[i].taskStatus = !this.tasks[i].taskStatus;
  }

  // tslint:disable-next-line:typedef
  onChangeUpdated(i: number) {
    this.tasks[i].isUpdated = !this.tasks[i].isUpdated;
  }

  // tslint:disable-next-line:typedef
  getTask(index: number) {
    if (this.tasks[index]) {
return this.tasks[index];
    }
    return false;
  }

  constructor() {
  }
}
