import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IEntity } from "./IEntity";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
export interface IService<T extends IEntity> 
{
  List():Observable<T[]>
  Add(entity: T):firebase.database.ThenableReference;
  Update(card: T):Promise<void>;
  Delete(key: string):Promise<void>;
}