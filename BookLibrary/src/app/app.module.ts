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
import { BanerComponent } from './home/baner/baner.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ManagebooksComponent } from './book/managebooks/managebooks.component';
import { FormsModule }   from '@angular/forms';
import { ToasterService } from './shared/services/toastr.service';
import { CommonAppModule } from './shared/Infrastructure/common.module';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TrelloBoadsComponent,
    MenuComponent,
    HomeComponent,
    BooklistComponent,
    BanerComponent,
    BookdetailsComponent,
    ManagebooksComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(fireconfig),
    CommonAppModule
  ],
  providers: [AngularFireDatabase,CardService,BooksService,ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
