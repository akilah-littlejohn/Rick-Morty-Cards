import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterDataService } from './character-data.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [ CharacterCardComponent],
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
