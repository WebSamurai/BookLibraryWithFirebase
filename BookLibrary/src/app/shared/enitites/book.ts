import { IEntity } from "../Interfaces/IEntity";

export class Book implements IEntity {
    
    constructor() {
        
    }
    public $key: string=''

    public author?: String=''

    country?: String=''

    imageLink?: String=''

    language?: String=''

    link?: string=''
    
    title?: String=''

    year?: Number=0
    
    pages?: Number=0

}
