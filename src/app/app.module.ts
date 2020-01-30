import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe/pokemon-detalhe.component';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista/pokemon-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpModule } from '@angular/http';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetalheComponent,
    PokemonListaComponent,
  ],
  imports: [
    HttpModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
