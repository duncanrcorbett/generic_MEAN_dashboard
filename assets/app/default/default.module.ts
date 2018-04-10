
import {NgModule} from "@angular/core";
import {PageHeaderModule} from "../shared/modules/page-header/page-header.module";
import {defaultRouting} from "./default.routing";
import {DefaultComponent} from "./default.component";

@NgModule({
    declarations: [
       DefaultComponent
    ],
    imports: [
        defaultRouting,
        PageHeaderModule
    ]
})
export class DefaultModule{}