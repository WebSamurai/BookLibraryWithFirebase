import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CardsComponent } from "./cards/cards.component";
import { BooklistComponent } from "./book/booklist/booklist.component";
import { ManagebooksComponent } from "./book/managebooks/managebooks.component";
export const routes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'tasks',component:CardsComponent},
    {path:'books',component:BooklistComponent},
    {path:'managebooks',component:ManagebooksComponent},
    {path:"user",loadChildren:"./user/user.module#UserModule"},
    {path:'',component:HomeComponent}
]

