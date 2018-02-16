import { IEntity } from "../Interfaces/IEntity";

export class Book implements IEntity
{
    $key: string;

    author: String;

    country: String;

    imageLink: String;

    language: String;

    title: String;

    year: Number;

}
