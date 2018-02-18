import { Component, OnInit } from '@angular/core';
import { IService } from '../../Interfaces/IService';
import { IEntity } from '../../Interfaces/IEntity';
import { Card } from '../../enitites/card';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ToasterService } from '../../services/toastr.service';

// @Component({
//   templateUrl: './common.component.html',
//   styleUrls: ['./common.component.css']
// })
export abstract class CommonComponent<T extends IEntity>
{
  _title: string;
  _columns: string[];
  _hiddenColumns: string[] = []
  entities: Observable<T[]>;
  _entity: T
  _addEditMode: boolean;
  mode: string;
  toasterService:ToasterService
  constructor(private service: IService<T>) {
    this._columns = [];
    this._hiddenColumns.push('$key');
    this._addEditMode = false;
    this.toasterService= new  ToasterService();

  }

  HideColumn(column: string): boolean {

    return this._hiddenColumns.includes(column)
  }
  List(fiter?: string) {

    //apply fiter logic
    this.entities = this.service.List()

  }
  ShowForm(mode: string, entity?: T) {
    this._addEditMode = true;
    console.log(mode);
    this.mode = mode;
    if (mode === 'edit') {
      this._entity = entity
    }
    else {
      Object.getOwnPropertyNames(this._entity).forEach(x => this._entity[x] = '')

    }
  }
  Cancel() {
    this._addEditMode = false;
  }
  ConfirmDelete(entity: T) 
  {
    if(confirm("Do you want to delete?"))
    {
        this.service.Delete(entity.$key).then(()=>{
          this.toasterService.Warning("Item is deleted");
   
        })
    }

  }
  ShowEdit(entity: T) {


  }
  Save(formdata: T) {
    if (this.mode === 'add') {
      console.log(formdata);

      this.service.Add(formdata).then(() => {
        this._addEditMode = false
        this.toasterService.Success("Item is created successfully !");
      }, (rejection) => {

        this.toasterService.Error("Error occured check log !");
        console.log(rejection);
        this._addEditMode = true
      }
      )

    }
    else {
      console.log(formdata);
      this.service.Update(formdata).then(()=>{
        this._addEditMode=false;
        this.toasterService.Success("Item is updated successfully !");
      }).catch(x=>{
        this.toasterService.Error("Error occured check log");
        console.log(x);
        this._addEditMode = true
      })

    }
  }

}
