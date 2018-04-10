import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent{
    @Input() heading: string;
    @Input() breadCrumbs: {name:string, link:string, icon:string}[];
    @Input() icon: string;
    constructor() {}

}
