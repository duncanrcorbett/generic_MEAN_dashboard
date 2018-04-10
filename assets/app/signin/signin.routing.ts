
import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from "./signin.component";

const signinScreenRoutes: Routes = [
    {
        path:'',
        component: SigninComponent
    }
];

export const signinRouting = RouterModule.forChild(signinScreenRoutes)