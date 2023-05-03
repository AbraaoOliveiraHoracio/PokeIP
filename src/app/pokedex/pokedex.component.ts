import { Component } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Dex } from '../Dex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent {
  Dex: Dex = {} as Dex;

  constructor(private service: PokedexService) {}

  loadPokemon() {
    this.service.getPokemon().subscribe({
      next: (data) => {
        this.Dex = data;
        this.Dex.img = data.sprites.other.home.front_default;
      },
    });
  }
  loadNextPokemon() {
    this.service.id = this.service.id + 1;
    this.service.getPokemon().subscribe({
      next: (data) => {
        this.Dex = data;
        this.Dex.img = data.sprites.other.home.front_default;
      },
    });
  }

  loadBackPokemon() {
    this.service.id = this.service.id - 1;
    this.service.getPokemon().subscribe({
      next: (data) => {
        this.Dex = data;
        this.Dex.img = data.sprites.other.home.front_default;
      },
    });
  }

  loadRandom() {
    this.service.id = Math.floor(Math.random() * 1008) + 1;
    this.service.getPokemon().subscribe({
      next: (data) => {
        this.Dex = data;
        this.Dex.img = data.sprites.other.home.front_default;
      },
    });
  }
  toggleDarkMode() {
    const body = document.getElementsByName('TT')[0];
    const body1 = document.getElementsByName('QQ')[0];
    body.classList.toggle('dark-mode');
    body1.classList.toggle('dark-mode');
  }
}
