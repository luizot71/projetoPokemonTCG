import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../../pokemon';
import { PokemonServiceService } from './../../pokemon-service.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css'],
  providers: [PokemonServiceService]
})

export class PokemonListaComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit(): void {
    this.pokemonService.list()
      .then((pokemons) => {
        this.pokemons = pokemons;
      });
  }

}

