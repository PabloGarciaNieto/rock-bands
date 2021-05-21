import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Band } from './../models/interface-band';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor() { }
  public bandsData = new BehaviorSubject<Band[]>([
    {id: '1', name: 'The Rolling Stones', country: 'England', members: ['j', 'k', 'l']},
    {id: '2', name: 'Led Zeppelin', country: 'USA', members: ['m', 'n', 'o']},
    {id: '3', name: 'Queen', country: 'England', members: ['p', 'q', 'r']},
    {id: '4', name: 'Pink Floyd', country: 'England', members: ['p', 'q', 'r']},
  ]);
  bands = this.bandsData.asObservable();

  updateBands(newBand: any) {
    this.bandsData.next(newBand);
  }
}
