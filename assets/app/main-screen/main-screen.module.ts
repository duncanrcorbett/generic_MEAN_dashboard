
import {NgModule} from "@angular/core";
import {MainScreenComponent} from "./main-screen.component";
import {mainScreenRouting} from "./main-screen.routing";
import {HeaderComponent} from "./header/header.component";
import {SideBarComponent} from "./side-bar/side-bar.component";

@NgModule({
    declarations:[
        MainScreenComponent,
        HeaderComponent,
        SideBarComponent
    ],
    imports: [
        mainScreenRouting
    ]
})
export class MainScreenModule{


}