import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import {AnnoncesService} from "./annonces.service";

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AddAnnonceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AnnoncesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
