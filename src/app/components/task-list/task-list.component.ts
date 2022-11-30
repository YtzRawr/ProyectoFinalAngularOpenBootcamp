import { Component, Input } from '@angular/core';
import { ITask, Levels } from '../interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
//TODO : Reformular como una lista de tareas
task1: ITask = {
  title: 'Task 1',
  description: 'Description 1',
  completed: false,
  level: Levels.Info
}

task2: ITask = {
  title: 'Task 2',
  description: 'Description 2',
  completed: true,
  level: Levels.Urgent
}

@Input() task: ITask | undefined;

constructor(){}

ngOnInit(): void {
}

deleteTask(task: ITask){
  alert(`se procede a eliminar la tarea: ${task.title}`);
}
}
