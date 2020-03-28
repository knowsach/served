import { Component } from "@angular/core";
import { RestaurantServices } from 'src/app/services/restaurant-list.service';
import { CollectionService } from '../collections/collection.service';
import { Router } from '@angular/router';
import { RestaurantModel } from './restaurants.model';
@Component({
    selector: 'Restaurant',
    templateUrl: './restaurant.html'
})

export class Restaurant {

    collectionId: any = null;
    cityId: any = null;
    loader: boolean = false;

    restaurantsList: RestaurantModel[];

    constructor(
        private restaursntService: RestaurantServices,
        private collectionService: CollectionService,
        public router: Router
    ) {

        this.restaurantsList = new Array<RestaurantModel>();

        this.collectionService.collectionDataAsObservable
            .subscribe(
                response => {
                    console.log('for restaurants:', response);
                    if (response.collection_id) {
                        this.cityId = response.city_id;
                        this.collectionId = response.collection_id;
                        this.getRestaurantsList();
                    }
                    else
                        this.router.navigate(['']);
                }
            )
    }

    ngOnInit() { }

    getRestaurantsList() {
        this.loader = true;
        this.restaursntService.getRestaurants(this.cityId, this.collectionId)
            .subscribe(
                response => {
                    this.restaurantsList = response['restaurants'];
                    console.log('you got restaursnts:', response, this.restaurantsList);
                    this.loader = false;
                },
                err => {
                    console.log('error:', err);
                    this.loader = false;
                }
            );
    }

    getResImage(res) {
        return res['restaurant'].thumb;
    }
}