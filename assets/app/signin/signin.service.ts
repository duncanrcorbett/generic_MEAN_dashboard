
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Admin} from "../main-screen/create-user/admin.model";

@Injectable()
export class SigninService{

    constructor(private http: HttpClient){}

    signin(admin: Admin){
        const body = JSON.stringify(admin);
        const headers  = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('admin-authentication/signin',body,{headers:headers})
            .map((response: any) => response)
            .catch((error: any) => Observable.throw(error))
    }
}