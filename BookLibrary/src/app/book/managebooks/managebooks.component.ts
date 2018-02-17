import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/enitites/book';
import { CommonComponent } from '../../shared/Infrastructure/common/common.component';

@Component({
  selector: 'app-managebooks',
  templateUrl:'../../shared/Infrastructure/common/common.component.html'
})
export class ManagebooksComponent extends CommonComponent<Book> implements OnInit {

  
  constructor(private bookService:BooksService) { 
    
    super(bookService);
    this._columns=Object.getOwnPropertyNames(new Book());
    this._hiddenColumns.push('imageLink','link')
    this._entity=new Book();
  }

  ngOnInit() {
  this.List();
  }

}
