import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Office Meeting' },
      { id: 2, name: 'Jogging' },
      { id: 3, name: 'Cooking' },
      { id: 4, name: 'Homework' },
      { id: 5, name: 'Watching TV' },
      { id: 6, name: 'Walking Dog' },
      { id: 7, name: 'Sending Email' },
    ];
    return { heroes };
  }



  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
