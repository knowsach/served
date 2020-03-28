import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { Home } from './components/home-page/home.component';
import { CityService } from './services/city/city.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestaurantServices } from './services/restaurant-list.service';
import { HomeService } from './components/home-page/home.service';
import { Loader } from './components/loader/loader.component';
import { CollectionComponent } from './components/collections/collection.component';
import { CollectionService } from './components/collections/collection.service';
import { Restaurant } from './components/restaurants/restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    CollectionComponent,
    Loader,
    Restaurant
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    HttpClientModule,
    FormsModule
  ],
  exports :[
    Loader
  ],
  providers: [CityService, RestaurantServices, HomeService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
