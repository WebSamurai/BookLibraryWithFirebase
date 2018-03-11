
import { IEntity } from "../Interfaces/IEntity";
import { IService } from "../Interfaces/IService";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import 'rxjs/add/operator/map';
import { ArrayObservable } from "rxjs/observable/ArrayObservable";
import { Observable } from "rxjs/Observable";
import { promise } from "protractor";
import * as firebase from 'firebase/app';
import { AuthService } from "./Auth.Service";
export class BaseService<T extends IEntity> implements IService<T>{
  _collectionName:string;
  _collectionRef: AngularFireList<T>
  _collection: Observable<T[]>

   constructor(protected fireDb:AngularFireDatabase,collectionName:string) {
       this._collectionName=collectionName
       this._collectionRef=this.fireDb.list(this._collectionName)
      
    
    }
    
  List(limit?:number): Observable<T[]>{
    if(limit!=null)
    {
    return this.fireDb.list(this._collectionName,ref=>ref.limitToLast(limit))
     .snapshotChanges().map(changes => {
      return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }as T));
    });
  
    }
    else{

     return this.fireDb.list(this._collectionName).snapshotChanges().map(changes => {
        return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }as T));
      });
    }
    }
  Add(entity: T):firebase.database.ThenableReference{
    delete entity.$key
   return this._collectionRef.push(entity);
  }
  Update(entity: T) :Promise<void>{
       const $key = entity.$key
       delete entity.$key
      return this._collectionRef.update($key, entity);
  }
  Delete(key: string):Promise<void> {
  
    return this._collectionRef.remove(key);
  }

}