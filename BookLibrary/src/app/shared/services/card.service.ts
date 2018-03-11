import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { Observable } from "rxjs/Observable";
import { BaseService } from "./BaseService";
import { Card } from "../enitites/card";
import { AuthService } from "./Auth.Service";

@Injectable()
export class CardService extends BaseService<Card> {
  
  // cardList: AngularFireList<Card>;
  isAthenticated: boolean;

  constructor(
    angularFire: AngularFireDatabase,
    private authService: AuthService
  ) {
    super(angularFire, "Cards");
    this.isAthenticated = this.authService.IsUserAuthenticated();
    
  }

  ListByUserId(): Observable<Card[]>{
  
      let user=this.authService.GetCurrentUser();
     
    //   return this.fireDb.list(this._collectionName,ref=>ref.orderByChild("userId").equalTo(this.authService.GetCurrentUser().uid))
    //   .snapshotChanges().map(changes => {
    //    return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }as Card));
    //  });
    return this.fireDb.list(this._collectionName,ref=>ref.orderByChild("userId").equalTo(this.authService.GetCurrentUser().uid))
    .snapshotChanges().map(changes => {
     return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }as Card));
   });
 
 
  }
}
