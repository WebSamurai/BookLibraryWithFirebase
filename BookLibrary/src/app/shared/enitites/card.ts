import { IEntity } from "../Interfaces/IEntity";

export class Card implements IEntity
 {
    $key: string='';
    userId:string='';
    boardId:Number=0;
    
    discription:String='';
    
    status:String ='New';
    
    title:String ='';
}