import { Component, OnInit,Input} from '@angular/core';
import { Book } from '../../shared/enitites/book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor() { }
@Input()
book:Book;
  ngOnInit() {
  }

}
