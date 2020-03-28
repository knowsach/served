import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CollectionService {

    collectionData = new BehaviorSubject<{ collection_id: any, city_id: any }>({ collection_id: null, city_id: null })
    collectionDataAsObservable = this.collectionData.asObservable();

    updateCollection(collecitonID, cityId) {
        this.collectionData.next({ collection_id: collecitonID, city_id: cityId });
    }


}