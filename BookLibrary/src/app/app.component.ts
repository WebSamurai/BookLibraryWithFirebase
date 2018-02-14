import { Component } from '@angular/core';
import { AngularFireDatabase  } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /**
   *
   */
  items: Observable<any[]>;
  constructor(private af:AngularFireDatabase) {
    this.items = af.list('Books').valueChanges();

  }
}
