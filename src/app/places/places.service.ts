import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
    'p1',
    'Manhattan mansion',
     'In the heart of new york city',
     'https://media-cdn.tripadvisor.com/media/photo-s/02/f4/91/20/my-kind-of-town-new-york.jpg',
    149.99),
    new Place(
    'p2',
    'Long beach mansion',
     'In the heart of Long beach Island, sea view',
     'https://luxport.s3.amazonaws.com/76768/243%2BEuclid%2BAvenue%2BLong%2BBeach%2BCA%2BUSA%2B630962_001_S.jpg',
    199.99),
    new Place(
      'p3',
      'Times Square accessible',
       'Times Square view from window',
       'https://pix6.agoda.net/hotelImages/116/1163204/1163204_16020607100039693841.jpg?s=1024x768',
      99.99)
  ];

  get places()  {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
