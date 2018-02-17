import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/enitites/book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: Book[];
  constructor(private bookService:BooksService) { }

  ngOnInit() {
    this.bookService.List(9).valueChanges().subscribe(x=>this.books=x as Book[])
  }

}
