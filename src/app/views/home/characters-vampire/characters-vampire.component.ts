import { CharactersVampire } from './../../../shared/service/model/character-vampire.model';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/service/characters.service';

@Component({
  selector: 'app-characters-vampire',
  templateUrl: './characters-vampire.component.html',
  styleUrls: ['./characters-vampire.component.css'],
})
export class CharactersVampireComponent implements OnInit {
  charCamarilla: CharactersVampire[] = [];
  charSabbat: CharactersVampire[] = [];
  charAnarchs: CharactersVampire[] = [];

  constructor(public vampireService: CharactersService) {}

  ngOnInit(): void {
    this.getCharactes();
  }

  getCharactes = () => {
    this.vampireService.getCharactersWithFlag(1, 1, 6).subscribe((response) => {
      this.charCamarilla = response;
      console.log(this.charCamarilla);
    });
  };
}
