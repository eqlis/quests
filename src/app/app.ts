import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
  <main>
    <router-outlet />
  </main>
`,
})
export class App {
  protected readonly title = signal('quests');
}
