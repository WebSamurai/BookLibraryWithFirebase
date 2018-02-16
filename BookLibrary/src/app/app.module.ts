import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";

import { AngularFireDatabase } from "angularfire2/database";
import { AppComponent } from './app.component';
import {fireconfig } from "./shared/firebase.config";
import { CardsComponent } from './cards/cards.component';
import { TrelloBoadsComponent } from './trello-boads/trello-boads.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BooklistComponent } from './book/booklist/booklist.component';
import { CardService } from "./shared/services/card.service";
import { BooksService } from './shared/services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TrelloBoadsComponent,
    MenuComponent,
    HomeComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fireconfig)
  ],
  providers: [AngularFireDatabase,CardService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
