import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Book } from "../enitites/book";
import { BaseService } from "./BaseService";

@Injectable()
export class BooksService extends BaseService<Book>  {

 constructor(private angularFire:AngularFireDatabase) {

   super(angularFire,'Books');

 }
}


