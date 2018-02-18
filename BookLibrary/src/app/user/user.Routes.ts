import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user.profile/user.profile.component";
import { ManageuserComponent } from "./manageuser/manageuser.component";


export const UserRoutes:Routes=[
    {
    path:"profile",component:UserProfileComponent
    },
    {
        path:"manageuser",component:ManageuserComponent
    }
]