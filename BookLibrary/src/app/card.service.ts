import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Card } from './shared/Models/card.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {
 
  cardList:AngularFireList<Card>
  constructor(private fireDb:AngularFireDatabase  )
   {
    this.cardList=this.fireDb.list('Cards')

    }

  ListCardsByStatus(status:string):AngularFireList<Card>
  {
return this.cardList=this.fireDb.list('Cards',ref=>ref.orderByChild('status').equalTo(status))

    
  }
  AddCard(card:Card)
  {
     this.cardList.push(card);
    
  }
  UpdateCard(card:Card)
  {
     this.cardList.update(card.$key,card);
  }
  Delete(key:string){
    this.cardList.remove(key) ;
  }
}
