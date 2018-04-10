
import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Admin} from "./admin.model";
import {CreateUserService} from "./create-user.service";

@Component({
    selector: 'app-default',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
    myForm: FormGroup;

    constructor(private createUserService: CreateUserService){}

    ngOnInit(){
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null,
                [
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]),
            password: new FormControl(null, Validators.required),
            telNo: new FormControl(null,Validators.required)
        })
    }


        onSubmit(){
            const admin = new Admin(
                this.myForm.value.email,
                this.myForm.value.password,
                this.myForm.value.firstName,
                this.myForm.value.lastName,
                this.myForm.value.telNo
            );
            this.createUserService.addUser(admin).subscribe(
                data => console.log(data),
                error => console.log(error)
            );
            this.myForm.reset();
    }
}