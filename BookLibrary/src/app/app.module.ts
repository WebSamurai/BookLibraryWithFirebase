import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AppComponent } from './app.component';
import {fireconfig } from "./shared/firebase.config";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fireconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
