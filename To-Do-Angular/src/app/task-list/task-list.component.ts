import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() tasksChanged = new EventEmitter<Task[]>();

  toggleCheck(index: number) {
    this.tasks[index].checked = !this.tasks[index].checked;
    this.tasksChanged.emit([...this.tasks]);
  }

  editTask(index: number) {
    const updated = prompt('Edit your task', this.tasks[index].text);
    if (updated && updated.trim()) {
      this.tasks[index].text = updated.trim();
      this.tasksChanged.emit([...this.tasks]);
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksChanged.emit([...this.tasks]);
  }
}
