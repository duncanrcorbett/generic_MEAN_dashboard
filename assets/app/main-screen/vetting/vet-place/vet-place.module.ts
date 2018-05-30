
import {NgModule} from "@angular/core";
import {vetPlaceRouting} from "./vet-place.routing";
import {VetPlaceComponent} from "./vet-place.component";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import {VetPlaceService} from "./vet-place.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgxSmartModalModule, NgxSmartModalService} from "ngx-smart-modal";
import {ClipboardModule} from "ngx-clipboard";

@NgModule({
    declarations: [
       VetPlaceComponent
    ],
    imports: [
        vetPlaceRouting,
        PageHeaderModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSmartModalModule,
        ClipboardModule
    ],
    providers:[
        VetPlaceService,
        NgxSmartModalService
    ]

})
export class VetPlaceModule{}