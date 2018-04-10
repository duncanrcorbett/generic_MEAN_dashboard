
import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Place} from "./place.model";

@Injectable()
export class VettingService{
    private places : Place[] = [];

    constructor (private http: HttpClient){}

    getPlaces(){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('admin-routes/getplaces' + token)
            .map((response: any) => {
                const places = response.obj;
                let gotPlaces : Place[] = [];
                for(let place of places){
                    gotPlaces.push(new Place(
                        place._id,
                        place.email,
                        '',
                        place.firstName,
                        place.lastName,
                        place.placeName,
                        place.telNo,
                        place.regNo,
                        place.accNo,
                        place.bank,
                        place.branchCode,
                        place.accType,
                        place.longitude,
                        place.latitude,
                        place.address,
                        place.status
                    ))
                }
                this.places = gotPlaces;
                console.log(this.places);
                return gotPlaces;
            })
            .catch((error: any) => Observable.throw(error))
    }

}