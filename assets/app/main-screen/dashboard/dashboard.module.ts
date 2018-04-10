import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {dashboardRouting} from "./dashboard.routing";
import {PageHeaderModule} from "../../shared";


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        dashboardRouting,
        PageHeaderModule
    ]
})
export class DashboardModule{}
