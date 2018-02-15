import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";

import { AngularFireDatabase } from "angularfire2/database";
import { AppComponent } from './app.component';
import {fireconfig } from "./shared/firebase.config";
import { CardsComponent } from './cards/cards.component';
import { TrelloBoadsComponent } from './trello-boads/trello-boads.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TrelloBoadsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fireconfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
