import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './app-task-item.component.html',
  styleUrl: './app-task-item.component.css'
})
export class AppTaskItemComponent {
  taskText: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.taskText.trim()) {
      this.taskAdded.emit(this.taskText.trim());
      this.taskText = '';
    } else {
      alert('Please enter a task!');
    }
  }
}
