import { NgModule } from "@angular/core";
import { GridfilterPipe } from "./gridfilter";
import { CommonformComponent } from './commonform/commonform.component';
import { FormsModule } from "@angular/forms";
import {CommonModule} from '@angular/common';
import { CommonListComponent } from './common-list/common-list.component';
@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[GridfilterPipe, CommonformComponent, CommonListComponent],
    exports:[GridfilterPipe,CommonformComponent,CommonListComponent]
})
export class CommonAppModule{

}