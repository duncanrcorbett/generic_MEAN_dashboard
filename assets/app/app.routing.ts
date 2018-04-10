import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./shared"

const APP_ROUTES: Routes = [
    { path: '' ,loadChildren: './main-screen/main-screen.module#MainScreenModule', canActivate: [AuthGuard]}
   // { path: 'signin',loadChildren: './signin/signin.module#SigninModule'}

];

export const routing = RouterModule.forRoot(APP_ROUTES);