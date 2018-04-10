import {NgModule} from "@angular/core";
import {signinRouting} from "./signin.routing";
import {SigninComponent} from "./signin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SigninService} from "./signin.service";

@NgModule({
    declarations:[
        SigninComponent
    ],
    imports: [
        signinRouting,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        SigninService
    ]
})
export class SigninModule{

}