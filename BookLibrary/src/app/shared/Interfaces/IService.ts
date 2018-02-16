import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IEntity } from "./IEntity";
export interface IService<T extends IEntity> 
{
  List():AngularFireList<T>
  Add(entity: T);
  Update(card: T);
  Delete(key: string);
}