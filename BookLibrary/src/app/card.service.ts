import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CardService {

  constructor(private fd:AngularFireDatabase) { }

  ListCardsByStatus(status:string){
   
  }
}
