import { Component, OnInit } from '@angular/core';
import { CardService } from "../shared/services/card.service";
import { Card } from "../shared/enitites/card";
import { AuthService } from '../shared/services/Auth.Service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
newCards:Card[]
inProgressCards:Card[]
doneCards:Card[]
UserId:string
  constructor(private cardService:CardService,private authService:AuthService) { }
 
  ngOnInit() {
    if(this.authService.IsUserAuthenticated()){

      this.authService._user.subscribe(x=> this.UserId=x.uid);


    }
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
