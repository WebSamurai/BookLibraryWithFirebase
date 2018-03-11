import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEntity } from '../../Interfaces/IEntity';

@Component({
	selector: 'commonform',
	templateUrl: './commonform.component.html',
	styleUrls: [ './commonform.component.css' ]
})
export class CommonformComponent<T extends IEntity> implements OnInit {
	@Input('columns') _columns = [];
	@Input('hidden') _hiddenColumns: string[] = [];
	@Input('entity') _entity: T;

	constructor() {}
	ngOnInit() {}
	@Output('Save') SaveData: EventEmitter<T> = new EventEmitter();
	@Output('Cancel') CancelOperation: EventEmitter<T> = new EventEmitter();

	Save(formData: T) {
		this.SaveData.emit(formData);
	}
  HideField(field:string):boolean{
  return this._hiddenColumns.includes(field)
  }
	Cancel() {
		this.CancelOperation.emit();
	}
}
