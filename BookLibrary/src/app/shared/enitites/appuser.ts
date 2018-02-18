import { IEntity } from "../Interfaces/IEntity";

export class AppUser implements IEntity
 {
    $key: string=''

    username:string=''
    
    Password:String=''
    
    address:String=''
    
    mobile:String='';
}