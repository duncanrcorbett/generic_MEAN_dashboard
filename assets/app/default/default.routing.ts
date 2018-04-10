
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./default.component";

const defaultRoutes: Routes = [
    {
        path: '',
        component: DefaultComponent
    }
];

export const defaultRouting = RouterModule.forChild(defaultRoutes);