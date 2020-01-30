import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListaComponent } from '../app/pokemon-lista/pokemon-lista/pokemon-lista.component';
import { PokemonDetalheComponent } from '../app/pokemon-detalhe/pokemon-detalhe/pokemon-detalhe.component';

const routes: Routes = [
  {
    path: 'pokemon-lista',
    component: PokemonListaComponent,
    data: { title: 'Lista de Pokemons' }
  },
  {
    path: 'details/:id',
    component: PokemonDetalheComponent,
    data: { title: 'Detalhe do Pokemon' }
  },
  { path: '',
    redirectTo: '/pokemon-lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






