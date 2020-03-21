import { Component } from "@angular/core";
import { CityService } from 'src/app/services/city/city.service';

@Component({
    selector: 'Home',
    templateUrl: './home.html'
})

export class Home {

    cityOptions: any[];
    searchText: String;
    timer: any;

    constructor(
        private cityService: CityService
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
}