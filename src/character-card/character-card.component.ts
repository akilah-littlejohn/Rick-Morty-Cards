import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDataService } from '../character-data.service';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
  standalone: true,
  imports: [],
})
export class CharacterCardComponent implements OnInit {
  characterId: number = 1;
  characters: Observable<any>;
  constructor(private characterService: CharacterDataService) {}

  ngOnInit() {
    this.characters = this.characterService.getData()
  }
}
