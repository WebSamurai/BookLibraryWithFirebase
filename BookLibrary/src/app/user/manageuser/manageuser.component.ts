import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../shared/Infrastructure/common/common.component';
import { AppUser } from '../../shared/enitites/appuser';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-manageuser',
  templateUrl:'../../shared/Infrastructure/common/common.component.html',
})
export class ManageuserComponent extends CommonComponent<AppUser> implements OnInit {
  constructor(private userService:UserService) { 
    
    super(userService);
    this.BaseSettings();
  }

  private BaseSettings() {
    this._entity=new AppUser();
    this._columns = Object.getOwnPropertyNames(new AppUser());
    this._title = "Manage User";
  }

  ngOnInit() {
  this.List();
  }

}
