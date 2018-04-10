
import {RouterModule, Routes} from "@angular/router";
import {VetPlaceComponent} from "./vet-place.component";

const vetPlaceRoutes: Routes = [
    {
        path: '',
        component: VetPlaceComponent
    }
];

export const vetPlaceRouting = RouterModule.forChild(vetPlaceRoutes);