
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Admin} from "./admin.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CreateUserService{

    constructor(private http: HttpClient){}

    addUser(admin: Admin){
        const body = JSON.stringify(admin);
        const headers  = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('admin-routes/signup',body,{headers:headers})
            .map((response: any) => response)
            .catch((error: any) => Observable.throw(error))
    }
}