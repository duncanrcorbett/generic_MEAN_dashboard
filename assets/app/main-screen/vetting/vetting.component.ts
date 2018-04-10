
import {Component, OnInit} from "@angular/core";
import {Place} from "./place.model";
import {VettingService} from "./vetting.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-vetting',
    templateUrl: './vetting.component.html',
    styleUrls: ['./vetting.component.css']
})
export class VettingComponent implements OnInit{
places: Place[] = [];

constructor(private vettingService: VettingService,private router: Router, private currentActivatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.getPlaces();
    }

    getPlaces(){
        this.vettingService.getPlaces().subscribe(
            (places: Place[]) => {
                this.places = places
            },
            error => console.log(error)
        )
    }

    onVet(place){
       // this.router.navigate(['/vet-place', {queryParams: place}])
        this.router.navigate(['vetting/vet-place'], {queryParams: {placeId :place._id}})
    }

}