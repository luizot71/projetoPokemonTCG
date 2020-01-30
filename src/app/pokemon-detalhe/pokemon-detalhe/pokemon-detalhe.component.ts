import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from './../../pokemon';
import { switchMap } from 'rxjs/operators';
import { PokemonServiceService } from 'src/app/pokemon-service.service';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.css'],
  providers: [PokemonServiceService]
})

export class PokemonDetalheComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();

  constructor(private pokemonService: PokemonServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {

      this.route.paramMap.pipe(switchMap((params: ParamMap) => this.pokemonService.get(+params.get('id'))
      .then(pokemon => this.pokemon = pokemon)));
      console.log(this.pokemon);
  }

  ngOnInit2(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => this.pokemonService.get(+params.get('id')))
      .add(pokemon => this.pokemon = pokemon);
  }
}
