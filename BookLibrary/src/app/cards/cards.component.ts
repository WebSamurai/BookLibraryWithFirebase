import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../shared/Models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
new:Card[]
inProgress:Card[]
done:Card[]
  constructor(private cardService:CardService) { }
 
  ngOnInit() {
   this.GetCards("new").subscribe(x=>this.new=x as Card[]);
   this.GetCards("Inprogress").subscribe(x=>
    { this.inProgress=x as Card[];
       console.log(x);}
   );
   this.GetCards("done").subscribe(x=>{
     this.done=x as Card[];
    console.log(x);
    } );
                    
  }


  private GetCards(status:string)
   {
     return this.cardService.ListCardsByStatus(status)
      .valueChanges()
  }
}
