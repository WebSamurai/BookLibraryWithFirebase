import { Component, OnInit } from '@angular/core';
import { CardService } from "../shared/services/card.service";
import { Card } from "../shared/enitites/card";



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
newCards:Card[]
inProgressCards:Card[]
doneCards:Card[]
  constructor(private cardService:CardService) { }
 
  ngOnInit() {
   this.GetCards("new").subscribe(x=>this.newCards=x as Card[]);
   this.GetCards("Inprogress").subscribe(x=>
    { this.inProgressCards=x as Card[];
       console.log(x);}
   );
   this.GetCards("done").subscribe(x=>{
     this.doneCards=x as Card[];
    console.log(x);
    } );
                    
  }


  private GetCards(status:string)
   {
     return this.cardService.ListByStatus(status)
      .valueChanges()
  }
}
