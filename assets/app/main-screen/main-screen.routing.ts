
import {RouterModule, Routes} from "@angular/router";
import {MainScreenComponent} from "./main-screen.component";

const mainScreenRoutes: Routes  = [
    {
        path: '',
        component: MainScreenComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
            {path: 'vetting', loadChildren:'./vetting/vetting.module#VettingModule'},
            {path: 'create-user', loadChildren:'./create-user/create-user.module#CreateUserModule'},
            {path: 'vetting/vet-place', loadChildren:'./vetting/vet-place/vet-place.module#VetPlaceModule'}

        ]
    }
];

export const mainScreenRouting = RouterModule.forChild(mainScreenRoutes);