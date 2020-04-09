import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
  
import { AppComponent } from './app.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
  
@NgModule({
    imports: [
      BrowserModule, 
      AppRoutingModule
    ],
    declarations: [
        AppComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        DetailPokemonComponent,
        ListPokemonComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }