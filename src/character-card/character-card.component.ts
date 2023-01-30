import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterDataService } from '../character-data.service';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class CharacterCardComponent implements OnInit {
  characterId: number = 1;
  characters: Observable<any>;
  constructor(private characterService: CharacterDataService) {}

  ngOnInit() {
    this.characters = this.characterService.getData().subscribe(
      data => this.characters = data
    )
  }
}
