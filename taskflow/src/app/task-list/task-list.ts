import { Component, signal, computed } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  tasks = signal<Task[]>([
    { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', completed: true, priority: 'low', dueDate: '2026-11-16' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'medium' }
  ]);

  count = computed(() => this.tasks().length);

  add() {
    const task: Task = {
      id: Date.now(),
      title: 'Nouvelle tâche',
      completed: false,
      priority: 'medium'
    };
    this.tasks.update(items => [...items, task]);
  }

  clear() {
    this.tasks.set([]);
  }

  onCompleted(id: number) {
    this.tasks.update(items =>
      items.map(t => t.id === id ? { ...t, completed: true } : t)
    );
  }
}