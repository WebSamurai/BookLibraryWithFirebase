import { Component, OnInit } from '@angular/core';
import { IService } from '../../Interfaces/IService';
import { IEntity } from '../../Interfaces/IEntity';
import { Card } from '../../enitites/card';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

// @Component({
//   templateUrl: './common.component.html',
//   styleUrls: ['./common.component.css']
// })
export abstract class CommonComponent<T extends IEntity> 
 {
  _entityName: string;
   _columns:string[];
   _hiddenColumns:string[]=[]
   entities:  Observable<T[]>;
   _entity:T
   _addEditMode:boolean;
   mode:string;
    constructor(private service:IService<T>) {
     this._columns;
     this._hiddenColumns.push('$key');
     this._addEditMode=false;
     this._entityName=  typeof(this._entity)
    }
  
    HideColumn(column:string):boolean{

      return this._hiddenColumns.includes(column)
    }
    List(fiter?:string){

        //apply fiter logic
        this.entities= this.service.List().valueChanges()
        
    }
    ShowForm(mode:string,entity?:T){
      this._addEditMode=true;
      console.log(mode);
      if(mode==='edit')
      {
        this._entity=entity
      }
    }
    Cancel(){
      this._addEditMode=false;
    }
    ConfirmDelete(entity:T){
      console.log(entity);
      
    }
    ShowEdit(entity:T){


    }
    Add(formdata:T){

       this.service.Add(formdata) 
    }
    edit(formdata:T){
        this.service.Update(formdata);
    }
    delete(key:string){
        this.service.Delete(key);
    }
}
