
import {RouterModule, Routes} from "@angular/router";
import {CreateUserComponent} from "./create-user.component";

const createUserRoutes: Routes = [
    {
        path: '',
        component: CreateUserComponent
    }
];

export const createUserRouting = RouterModule.forChild(createUserRoutes);