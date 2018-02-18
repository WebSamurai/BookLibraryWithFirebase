import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/enitites/book';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: Observable<Book[]>;
  count:number;
  Pills:number[]=[];
  constructor(private bookService:BooksService) { }

  ngOnInit() {


   // this.GetCount();
    
    this.books= this.bookService.List(9);

  }
  // GetBooks(limit:number){
  //   var start=limit-9
  //   this.books= this.bookService.List(start,limit);
  // }
  // GetCount(){
  //   this.bookService.List().map(list=>list.length).subscribe(x=>
  //     {
  //     this.count;
  //     for (let index = 9; index < this.count, index=+9;) {
  //      this.Pills.push(index)
      
  //   }
  //   })
  // }

}
