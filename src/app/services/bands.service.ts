import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Band } from './../models/interface-band';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor() { }
  public bandsData = new BehaviorSubject<Band[]>([
    {id: '1', name: 'The Rolling Stones', country: 'England', members: [{name: ''}], history: '', video: ''},
    {id: '2', name: 'Led Zeppelin', country: 'USA', members: [{name: ''}], history: '', video: ''},
    {id: '3', name: 'Queen', country: 'England', members: [{name: ''}], history: '', video: ''},
    {id: '4', name: 'Pink Floyd', country: 'England', members: [{name: ''}], history: '', video: ''},
  ]);
  bands = this.bandsData.asObservable();

  newBands(newBand: Band[]) {
    this.bandsData.next(newBand);
  }
}
