
import { IEntity } from "../Interfaces/IEntity";
import { IService } from "../Interfaces/IService";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";

export class BaseService<T extends IEntity> implements IService<T>{
  _collectionName:string;
  _collection: AngularFireList<T>

   constructor(protected fireDb:AngularFireDatabase,collectionName:string) {
       this._collectionName=collectionName
    }
  List(): AngularFireList<T> {
     return this._collection = this.fireDb.list(this._collectionName);
  }
  Add(entity: T) {
  this._collection.push(entity);
  }
  Update(card: T) {
       this._collection.update(card.$key, card);
  }
  Delete(key: string) {
   this._collection.remove(key);
  }

}