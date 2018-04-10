
import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    place;
    placeName = 'Unknown';
    status = 'Unknown'

    constructor(private http: HttpClient){}

    ngOnInit(){
        this.getPlace().subscribe(
            (place : any) => {
                this.place = place.obj;
                this.placeName = this.place.placeName;
                this.status = this.place.status;
            },
            error => {
                console.log(error);
            }
        )

    }

    getStatusColor(){
        if (this.status == 'inactive'){
            return 'red'
        } else {
            return 'pink'
        }
    }

    getPlace() {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('dash-routes/getplace' + token)
            .map((res: any) => {
                const place = res;
                return place;
            })
            .catch((error: any) => Observable.throw(error))
    }

    onLogOut(){
      localStorage.clear();
    }

}
