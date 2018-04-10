
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {FormGroup, FormControl, Validators} from "@angular/forms";
import {SigninService} from "./signin.service";
import {Admin} from "../main-screen/create-user/admin.model";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
    myForm: FormGroup;

    constructor(private router: Router, private signinService: SigninService){}

     onSignIn(){
        const admin = new Admin(this.myForm.value.email,this.myForm.value.password);
        this.signinService.signin(admin).subscribe(
            data => {
                localStorage.setItem('token', data.token);
                this.router.navigate(['/']);
            },
            error => {
                    console.log(error)
            }
        );
        this.myForm.reset();


    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}