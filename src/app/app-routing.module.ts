import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home-page/home.component';
import { CollectionComponent } from './components/collections/collection.component';
import { Restaurant } from './components/restaurants/restaurant.component';


const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: Home },
  { path: 'collection', component: CollectionComponent },
  { path: 'restaurants', component: Restaurant }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
