import { IEntity } from "../Interfaces/IEntity";

export class Card implements IEntity
 {
    $key: string;

    boardId:Number;
    
    discription:String;
    
    status:String;
    
    title:String;
}