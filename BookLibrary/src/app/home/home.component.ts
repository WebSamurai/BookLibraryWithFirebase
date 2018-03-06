import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/Auth.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  
  constructor(private authService:AuthService) {
    
 console.log(authService._user);
 
  }

  ngOnInit() {
  }

}
