import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Band } from './../models/interface-band';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor() { }
  public bandsData = new BehaviorSubject<Band[]>([
    {id: 1, name: 'The Rolling Stones', country: 'England', members: [{id: Math.random(), instrument: 'Voice', name: 'Mick Jagger'}, {id: Math.random() , instrument: 'Guitar', name: 'Keith Richards'}], history: 'Excesos', video: '9g7RmKF-gRI'},
    {id: 2, name: 'Led Zeppelin', country: 'USA', members: [{id: Math.random(), instrument: '', name: 'Jagger'}], history: '', video: ''},
    {id: 3, name: 'Queen', country: 'England', members: [{id: Math.random(), instrument: '', name: 'Jagger'}], history: '', video: ''},
    {id: 4, name: 'Pink Floyd', country: 'England', members: [{id: Math.random(), instrument: '', name: 'Jagger'}], history: '', video: ''},
  ]);
  bands = this.bandsData.asObservable();

  newBands(newBand: Band[]) {
    this.bandsData.next(newBand);
  }
}
