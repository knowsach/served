import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeService {

    locationData = new BehaviorSubject<{ locationData: any }>({ locationData: null });
    locationDataAsObservable = this.locationData.asObservable();


    updateLocation(updatedLocation : any) {
        this.locationData.next({locationData : updatedLocation});
    }

}