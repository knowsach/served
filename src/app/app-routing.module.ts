import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home-page/home.component';
import { CollectionComponent } from './components/collections/collection.component';


const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: Home },
  { path: 'collection', component: CollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
