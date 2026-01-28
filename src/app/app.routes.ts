import { Routes } from '@angular/router';
import { QuestComponent } from './quest/quest.component';
import { CollectionComponent } from './collection/collection.component';

export const routes: Routes = [
    {
        path: '',
        component: CollectionComponent,
        title: 'Quests',
    },
    {
        path: 'quest',
        component: QuestComponent,
        title: 'Quest Progress',
    }
];
