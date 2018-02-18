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
  constructor(private bookService:BooksService) { }

  ngOnInit() {
    this.books= this.bookService.List(9);


    
  }

}
