import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        return true
        // if (localStorage.getItem('token')) {
        //     return true;
        // }
        //
        // this.router.navigate(['/signin']);
        // return false;
    }
}
