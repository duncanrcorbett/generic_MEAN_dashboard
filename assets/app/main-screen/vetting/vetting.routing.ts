
import {RouterModule, Routes} from "@angular/router";
import {VettingComponent} from "./vetting.component";

const vettingRoutes: Routes = [
    {
        path: '',
        component: VettingComponent
    }
];

export const vettingRouting = RouterModule.forChild(vettingRoutes);