import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CardsComponent } from "./cards/cards.component";
import { BooklistComponent } from "./book/booklist/booklist.component";
import { ManagebooksComponent } from "./book/managebooks/managebooks.component";
import { AuthGuard } from "./shared/Infrastructure/authGuard";
import { LoginComponent } from "./home/login/login.component";
export const routes:Routes=[
    {path:"user",loadChildren:"./user/user.module#UserModule"},
    {path:'home',component:HomeComponent},
    {path:'tasks',component:CardsComponent},
    {path:'books',component:BooklistComponent},
    {path:'login',component:LoginComponent},
    {path:'managebooks',component:ManagebooksComponent,canActivate:[AuthGuard]},
  
    {path:'',component:HomeComponent}
]

