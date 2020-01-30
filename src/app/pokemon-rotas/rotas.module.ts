import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListaComponent } from '../pokemon-lista/pokemon-lista/pokemon-lista.component';
import { PokemonDetalheComponent } from '../pokemon-detalhe/pokemon-detalhe/pokemon-detalhe.component';

const routes: Routes = [
  { path: '', component: PokemonListaComponent },
  { path: 'details/:id', component: PokemonDetalheComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
