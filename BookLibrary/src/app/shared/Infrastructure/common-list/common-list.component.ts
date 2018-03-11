import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEntity } from '../../Interfaces/IEntity';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css']
})
export class CommonListComponent<T extends IEntity> implements OnInit {
  @Input("hiddenColumns") _hiddenColumns: string[] = []
  @Input('columns') _columns = [];

  @Input("entities") entities :Observable<T[]>
   @Output() showform:EventEmitter<any>=new EventEmitter()
   @Output() delete:EventEmitter<T>=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  HideColumn(column: string): boolean {

    return this._hiddenColumns.includes(column)
  }

  ConfirmDelete(entity: T) 
  { this.delete.emit(entity);
    

  }

  ShowForm(mode: string, entity?: T) {
    let data={mode:mode,entity:entity}
    this.showform.emit(data)
    // this._addEditMode = true;
    // console.log(mode);
    // this.mode = mode;
    // if (mode === 'edit') {
    //   this._entity = entity
    // }
    // else {
    //   Object.getOwnPropertyNames(this._entity).forEach(x => this._entity[x] = '')

    // }
  }
}
