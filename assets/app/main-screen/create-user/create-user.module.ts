
import {NgModule} from "@angular/core";


import {createUserRouting} from "./create-user.routing";
import {CreateUserComponent} from "./create-user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {CreateUserService} from "./create-user.service";

@NgModule({
    declarations: [
      CreateUserComponent
    ],
    imports: [
        createUserRouting,
        PageHeaderModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        CreateUserService
    ]
})
export class CreateUserModule{}