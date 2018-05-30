
import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Place} from "../place.model";

@Injectable()
export class VetPlaceService{
    private place : Place;

    constructor (private http: HttpClient){}

    getPlace(placeId){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('admin-routes/getplace/'+placeId + token)
            .map((response: any)=>{
                const place = response.obj;
                let newPlace : Place = place;
                this.place = newPlace;
                return newPlace;
            })
            .catch((error: any) => Observable.throw(error))
    }

    activatePlace(placeId){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.patch('admin-routes/activate-place/'+placeId + token,null,{headers: headers})
            .map((response: any) => response)
            .catch((error: any) => Observable.throw(error))
    }

    takeControl(placeId){

        let  payload = {
            _id:placeId
        };
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const body = JSON.stringify(payload);
        const headers  = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('admin-routes/takecontrol'+token,body,{headers:headers})
            .map((response: any) => {
            console.log(response);
            return response.token;
            })
            .catch((error: any) => Observable.throw(error))
    }


}