import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children:
    [
      {
        path:'discover', 
        children:[
          {
            path:'',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          },
          {
            path:':placeId',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
          }
        ]
      },
      {
        path:'offers',
        children:[
          {
            path:'',
            loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
          },
          { //hardcoded path
            path:'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
          },
          {  //Dynamic segment
            path:'edit/:placeId',
            loadChildren: () => import('./offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
          },
          {  //Dynamic segment
            path:':placeId',
            loadChildren: () => import('./offers/offer-booking/offer-booking.module').then( m => m.OfferBookingPageModule)
          }
          // hardcoded path have to go before dynamic
          // because if the hardcoded is after dynamic then the path of hardcoded will be
          //considered as ID for the dynamic path
          
        ]
      },
      {
        path:'',
        redirectTo: '/places/tabs/discover',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/places/tabs/dis cover',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
