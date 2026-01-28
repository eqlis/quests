import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quest } from '../quest';
import { QuestPreviewComponent } from '../quest-preview/quest-preview.component';
import { QuestService } from '../quest-service';

@Component({
  selector: 'app-collection',
  imports: [CommonModule, QuestPreviewComponent],
  template: `
    <h1>Quests</h1>
    <section>
      @for (quest of quests; track quest.id) {
        <app-quest-preview [quest]="quest"></app-quest-preview>
      }
    </section>
  `,
  styleUrl: './collection.component.css',
})
export class CollectionComponent {
  quests: Quest[] = [];
  questService: QuestService = inject(QuestService);

  constructor() {
    this.quests = this.questService.getAllQuests();
  }
}
