import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CityService {

    url = environment.baseUrl;
    apiKey  = environment.apiKey;

    constructor(
        private http: HttpClient,
    ) { }

    searchByCityName(searchQuery) {
        const option = {
            headers : new HttpHeaders({
                'user-key': this.apiKey
            })
        }

        return this.http.get(`${this.url}/cities?q=${searchQuery}`, option);
    }
}