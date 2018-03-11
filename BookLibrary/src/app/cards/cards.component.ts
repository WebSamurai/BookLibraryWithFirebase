import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CardService } from '../shared/services/card.service';
import { Card } from '../shared/enitites/card';
import { AuthService } from '../shared/services/Auth.Service';
import { CommonComponent } from '../shared/Infrastructure/common/common.component';
declare var $ :any
@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: [ './cards.component.css' ]
})
export class CardsComponent extends CommonComponent<Card> implements OnInit {
	allCards: Card[];
	newCards: Card[];
	inProgressCards: Card[];
	doneCards: Card[];
	UserId: string;
	constructor(private cardService: CardService, private authService: AuthService) {
    super(cardService);
	
	this.BaseSettings();
	}

	ngOnInit() {
	
		this.GetAllCards()

	}

	private BaseSettings() {
        this._entity = new Card();
    this._columns = Object.getOwnPropertyNames(new Card());
	this._hiddenColumns.push("userId","status","boardId")

    this._title = "Manage Cards";
  }
  
Cancel()
{
$("#cardModel").modal('hide')
}
private GetCards(status: string): Card[] {
	return this.allCards.filter((x) => x.status == status);
}
 GetAllCards(){
	this.cardService.ListByUserId().subscribe((x) => {
		this.allCards = x as Card[];
		this.inProgressCards = this.GetCards('Inprogress');

		this.newCards = this.GetCards('New');
		this.doneCards = this.GetCards('Done');
	});
 }
  Save(card:Card){

	 card.userId=this.authService.GetCurrentUser().uid;
	 card.boardId=1;
	 if(card.status==''){
		 card.status='New'
	 }
	super.Save(card);
	$("#cardModel").modal('hide')
	//this.GetAllCards()
  }
  Edit(card:Card){
	  this.mode='edit';
	  var data:{mode:string,entity:Card}={mode:"edit",entity:card}
	  this.ShowForm(data)
	  $("#cardModel").modal('show')
  }
  Add(){
	 this.mode="add";
	  var data:{mode:string,entity:Card}={mode:this.mode,entity:null}
	  this.ShowForm(data)
	  $("#cardModel").modal('show')
  }
 addDropItem(event){
	console.log('drag leave event');
	
}
dragEnter(event){
console.log('drag enter event');

}
dragLeave(){
	console.log('drag leave event');
}


dropEventMouse(event){
	console.log("dropEventMouse");
	
	console.log(event);
	
}

dragoverMouse(event){
	console.log("dragoverMouse");
	console.log(event);
}
releaseDrop(event){
	console.log("releaseDrop");

	
}
startDrag(event){
	console.log(event);
	
}
addDropItemInProgres(event:Card){
	if(event.status!=="InProgress"){
		event.status="Inprogress"
		super.Save(event)
	}
}
addDropItemInDone(event:Card){
	if(event.status!=="Done"){
		event.status="Done"
		super.Save(event)
	}
}
}
