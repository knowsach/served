import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestaurantServices {

    url = environment.baseUrl;
    apiKey = environment.apiKey;

    option = {
        headers: new HttpHeaders({
            'user-key': this.apiKey
        })
    }

    constructor(
        private http: HttpClient,
    ) { }

    getCollections(city_id) {
        return this.http.get(`${this.url}/collections?city_id=${city_id}`, this.option);
    }

    getRestaurants(city_id, collection_id) {
        return this.http.get(`${this.url}/search?city_id=${city_id}&collection_id=${collection_id}`, this.option);
    }
}