
import {Component, OnInit} from "@angular/core";
import {VetPlaceService} from "./vet-place.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Place} from "../place.model";
import {FormControl, FormGroup} from "@angular/forms";
import {NgxSmartModalService} from "ngx-smart-modal";

@Component({
    selector: 'app-vetPlace',
    templateUrl: './vet-place.component.html',
    styleUrls: ['./vet-place.component.css']
})
export class VetPlaceComponent implements OnInit{
    breadCrumbs = [
        {name: 'Vetting',
            link: '../',
            icon: ''} //todo
    ];

    placeId = '';
    place: Place;
    myForm: FormGroup;

    constructor(private vetPlaceService: VetPlaceService, private route: ActivatedRoute, private router: Router,
                private ngxSmartModalService: NgxSmartModalService){}

    // FORM //
    private placeNameForm;
    private addressForm;
    private regNoForm;
    private telNoForm;
    private accNoForm;
    private bankForm;
    private branchCodeForm;
    private accTypeForm;
    private lngForm;
    private latForm;

    ngOnInit(){

        this.route.queryParams.subscribe(params => {
            this.placeId = params['placeId'];
        })
        console.log(this.placeId)

      //form
        this.myForm = new FormGroup({
            placeName: new FormControl(),
            address: new FormControl(),
            regNo: new FormControl(),
            telNo: new FormControl(),
            accNo: new FormControl(),
            bank: new FormControl(),
            branchCode: new FormControl(),
            accType: new FormControl(),
            lng: new FormControl(),
            lat: new FormControl()
        });
        this.placeNameForm = this.myForm.get('placeName');
        this.addressForm = this.myForm.get('address');
        this.regNoForm = this.myForm.get('regNo');
        this.telNoForm = this.myForm.get('telNo');
        this.accNoForm = this.myForm.get('accNo');
        this.bankForm = this.myForm.get('bank');
        this.branchCodeForm = this.myForm.get('branchCode');
        this.accTypeForm = this.myForm.get('accType');
        this.lngForm = this.myForm.get('lng');
        this.latForm = this.myForm.get('lat');

        this.getPlace()

    }

    getPlace(){
        this.vetPlaceService.getPlace(this.placeId).subscribe(
            (place: Place) => {
                this.place = place
                this.setValues();
            },
            error => console.log(error)
        )
    }

    setValues(){
        this.placeNameForm.setValue(this.place.placeName);
        this.addressForm.setValue(this.place.address);
        this.regNoForm.setValue(this.place.regNo);
        this.telNoForm.setValue(this.place.telNo);
        this.accNoForm.setValue(this.place.accNo);
        this.bankForm.setValue(this.place.bank);
        this.branchCodeForm.setValue(this.place.branchCode);
        this.accTypeForm.setValue(this.place.accType);
        this.lngForm.setValue(this.place.longitude);
        this.latForm.setValue(this.place.latitude);
    }


    onSubmit(){
        this.vetPlaceService.activatePlace(this.placeId).subscribe(
            data => console.log(data),
            error => console.log(error)
        )
    }

    code = 'qqq'
    takeControl(){
        this.vetPlaceService.takeControl(this.placeId).subscribe(
            res => {
                console.log(res);
                this.code = res;
              this.ngxSmartModalService.getModal('controlModal').open()
            },
            err => {
                console.log(err)
            }
        )
    }
}