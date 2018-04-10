
import {NgModule} from "@angular/core";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VettingComponent} from "./vetting.component";
import {vettingRouting} from "./vetting.routing";
import {VettingService} from "./vetting.service";

@NgModule({
    declarations: [
       VettingComponent
    ],
    imports: [
        vettingRouting,
        PageHeaderModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[
        VettingService
    ]
})
export class VettingModule{}