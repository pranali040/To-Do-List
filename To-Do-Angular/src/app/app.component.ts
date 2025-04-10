import { Component } from '@angular/core';

export interface Task {
  text: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

  addTask(taskText: string) {
    const task: Task = { text: taskText, checked: false };
    this.tasks.push(task);
    this.saveTasks();
  }

  updateTasks(updatedTasks: Task[]) {
    this.tasks = updatedTasks;
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
