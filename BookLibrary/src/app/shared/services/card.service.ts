import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { BaseService } from "./BaseService";
import { Card } from "../enitites/card";

@Injectable()
export class CardService extends BaseService<Card>{
 
  cardList:AngularFireList<Card>
 
 constructor(angularFire:AngularFireDatabase) {

   super(angularFire,'Books');

 }

  ListByStatus(status:string):AngularFireList<Card>
  {
     return this.fireDb.list(this._collectionName,ref=>ref.orderByChild('status').equalTo(status))

  }
}
