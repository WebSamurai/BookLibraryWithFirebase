import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { BaseService } from "./BaseService";
import { Card } from "../enitites/card";
import { AuthService } from './Auth.Service';

@Injectable()
export class CardService extends BaseService<Card>{
 
  cardList:AngularFireList<Card>
  isAthenticated:boolean;

 constructor(angularFire:AngularFireDatabase,private authService:AuthService) {

   super(angularFire,'Cards');
   this.isAthenticated=this.authService.IsUserAuthenticated();
   if(this.isAthenticated){
     
   }

 }

  ListByStatus(status:string):AngularFireList<Card>
  {
     return this.fireDb.list(this._collectionName,ref=>ref.orderByChild('status').equalTo(status))

  }
}
