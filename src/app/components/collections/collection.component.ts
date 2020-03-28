import { Component } from "@angular/core";
import { RestaurantServices } from 'src/app/services/restaurant-list.service';
import { HomeService } from '../home-page/home.service';
import { Router } from '@angular/router';
import { Collection } from './collection.model';
import { CollectionService } from './collection.service';


@Component({
    selector: 'Collection',
    templateUrl: './collection.html'
})

export class CollectionComponent {

    locationData: any;
    allAvailableCollection: Collection[] = new Array<Collection>();
    loader: boolean;

    constructor(
        private restaurantService: RestaurantServices,
        private homeService: HomeService,
        public router: Router,
        private collectionService: CollectionService
    ) {

        // this.allAvailableCollection = new Array<Collection>();
        this.loader = false;

        this.homeService.locationDataAsObservable
            .subscribe(
                res => {
                    this.locationData = res.locationData
                    if (!this.locationData)
                        this.router.navigate(['home']);
                    else
                        this.getAllCollections();
                }
            );
    }

    ngOnInit() { }

    getAllCollections() {
        this.loader = true;
        this.restaurantService.getCollections(this.locationData.id)
            .subscribe(
                res => {
                    this.allAvailableCollection = res['collections'];
                    console.log('collections:', res, this.allAvailableCollection)
                    this.loader = false;
                },
                err => {
                    console.log('err:', err);
                    this.loader = false;
                }
            );
    }

    getImageSrc(collection) {
        return collection['collection'].image_url;
    }

    onCollectionSelect(collection) {
        console.log('collection:', collection);
        this.collectionService.updateCollection(collection['collection'].collection_id, this.locationData.id);
        this.router.navigate(['restaurants']);
    }
}