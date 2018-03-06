import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/services/Auth.Service';
import { ToasterService } from '../shared/services/toastr.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 _authenticated:boolean=false;
 userName:string
  constructor(public authService:AuthService,private tostrService:ToasterService) {
  
   }

  ngOnInit() {
  }
 Logout(){
  this.authService.LogOut()
  this.tostrService.Success("Sucessfully logout ","Loging out")
 }
}
