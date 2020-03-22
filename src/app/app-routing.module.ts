import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home-page/home.component';
import { Restaurant } from './components/resaurants/restaurant.component';


const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: Home },
  { path: 'restaurant', component: Restaurant }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
