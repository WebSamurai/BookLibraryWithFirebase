import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user.profile/user.profile.component";
import { ManageuserComponent } from "./manageuser/manageuser.component";
import { AuthGuard } from "../shared/Infrastructure/authGuard";


export const UserRoutes:Routes=[
    {
    path:"profile",component:UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path:"manageuser",component:ManageuserComponent,canActivate:[AuthGuard]
    }
]