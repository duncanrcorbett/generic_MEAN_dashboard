
import {RouterModule, Routes} from "@angular/router";
import {MainScreenComponent} from "./main-screen.component";

const mainScreenRoutes: Routes  = [
    {
        path: '',
        component: MainScreenComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},

        ]
    }
];

export const mainScreenRouting = RouterModule.forChild(mainScreenRoutes);