import { Component } from "@angular/core";
import { CityService } from 'src/app/services/city/city.service';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    selector: 'Home',
    templateUrl: './home.html'
})

export class Home {

    cityOptions: any[];
    searchText: String;
    timer: any;
    autoCompleteSearchResult: any;

    constructor(
        private cityService: CityService,
        public router : Router,
        private homeService : HomeService
    ) {
        this.cityOptions = new Array<any>();
        this.searchText = '';
    }

    ngOnInit() { }

    onKeyDown(event) {
        this.searchText = event.target.value;

        // let timer;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            console.log('search text:', this.searchText);
            if (this.searchText.length)
                this.searchForCities();
        }, 500)
    }

    searchForCities() {
        this.cityService.searchByCityName(this.searchText)
            .subscribe(
                response => {
                    console.log('city searched:', response);
                    this.cityOptions = response['location_suggestions'];
                },
                err => {
                    console.log('error:', err);
                }
            );
    }

    getSearchBoxValue() {
        if (typeof (this.autoCompleteSearchResult) == 'object') {
            return this.autoCompleteSearchResult.name;
        }
        else
            return this.searchText;
    }

    onCitySelection() {
        this.homeService.updateLocation(this.autoCompleteSearchResult);
        console.log(this.autoCompleteSearchResult);
        this.router.navigate(['collection']);
    }
}