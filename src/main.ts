import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterDataService } from './character-data.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  template: `
   <character-card></character-card>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,
  {
    providers:[
      importProvidersFrom(CharacterDataService),
      provideHttpClient()

    ]
  });
