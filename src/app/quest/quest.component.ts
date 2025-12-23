import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestService } from '../quest-service';
import { Quest } from '../quest';

@Component({
  selector: 'app-quest-component',
  imports: [CommonModule, RouterModule],
  template: `
    @if (quest) {
      <h1>{{quest.title}}</h1>
      @if (!questStarted) {
        <div class="instruction-block">
          <p class="text-block">{{quest.instructions}}</p>
          <button type="button" (click)="startQuest()">Start</button>
        </div>
      }
      @if (questStarted && quest.tasks && currentTaskIndex() < quest.tasks.length) {
        <div class="task">
          <h2>{{quest.tasks[currentTaskIndex()].title}}</h2>
          <p class="text-block">{{quest.tasks[currentTaskIndex()].description}}</p>
          <img [src]="quest.tasks[currentTaskIndex()].image" alt="{{ quest.tasks[currentTaskIndex()].title }} image" />
          <form class="confirmation-form">
            <label for="confirmationCode">Confirmation Code:</label>
            <input id="confirmationCode" name="confirmationCode" type="text" #code />
            <button type="button" (click)="submitConfirmation(code)">Verify</button>
          </form>
          <div [hidden]="resultHidden">
            <span [ngClass]="{success: resultStatus() === 'success', error: resultStatus() === 'error'}">{{result()}}</span>
          </div>
          <button [hidden]="!taskCompleted" type="button" (click)="moveToNextTask(); code.value='';">Next</button>
        </div>
      }
      @if (questStarted && currentTaskIndex() >= quest.tasks.length) {
        <h2 class="completion-title">Congratulations! You have completed the quest.</h2>
      }
    }
  `,
  styleUrl: './quest.component.css',
})
export class QuestComponent {
  questService: QuestService = inject(QuestService);
  quest: Quest | undefined;
  currentTaskIndex = signal(0);
  questStarted: boolean = false;
  resultHidden: boolean = true;
  result = signal("");
  resultStatus = signal<'success' | 'error' | null>(null);
  taskCompleted: boolean = false;

  constructor() {
    this.quest = this.questService.getQuest();
  }

  startQuest(): void {
    this.questStarted = true;
  }

  submitConfirmation(code: HTMLInputElement): void {
    this.resultHidden = false;
    if (this.quest?.tasks[this.currentTaskIndex()] && code.value === this.quest.tasks[this.currentTaskIndex()].confirmationCode) {
      this.result.set("Task completed successfully!");
      this.resultStatus.set('success');
      this.taskCompleted = true;
    } else {
      this.result.set("Incorrect confirmation code.");
      this.resultStatus.set('error');
      code.value = '';
    }
  }

  moveToNextTask(): void {
    this.currentTaskIndex.set(this.currentTaskIndex() + 1);
    this.resultHidden = true;
    this.taskCompleted = false;
  }
}
