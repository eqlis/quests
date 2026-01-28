import { Component, Input } from '@angular/core';
import { Quest } from '../quest';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quest-preview',
  imports: [CommonModule, RouterModule],
  template: `
    <h2>{{ quest.title }}</h2>
    <p>{{ quest.description }}</p>
    <img [src]="quest.image" alt="{{ quest.title }} image" />
    <p>Number of Tasks: {{ quest.tasks.length }}</p>
    <a [routerLink]="'/quest'">Start Quest</a>
  `,
  styleUrl: './quest-preview.component.css',
})
export class QuestPreviewComponent {
  @Input() quest!: Quest;
}
