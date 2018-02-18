import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user.profile/user.profile.component";
import { UserRoutes } from "./user.Routes";
import { ManageuserComponent } from './manageuser/manageuser.component';
import { FormsModule }   from '@angular/forms';
import { UserService } from "../shared/services/user.service";
import { ToasterService } from "../shared/services/toastr.service";

@NgModule({
    declarations:[UserProfileComponent, ManageuserComponent],
    imports:[CommonModule, RouterModule.forChild(UserRoutes),FormsModule],
    providers:[UserService],
    exports:[]

})
export class UserModule{

}