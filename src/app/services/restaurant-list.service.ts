import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestaurantServices {

    url = environment.baseUrl;
    apiKey  = environment.apiKey;

    constructor(
        private http: HttpClient,
    ) { }

    getCollections(city_id) {
        const option = {
            headers : new HttpHeaders({
                'user-key': this.apiKey
            })
        }

        return this.http.get(`${this.url}/collections?city_id=${city_id}`, option);
    }
}