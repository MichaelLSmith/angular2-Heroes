import { Injectable } from '@angular/core';

import { Hero } from './hero';//Hero Class
import { HEROES } from './mock-heroes';//Hero mock data



@Injectable()
export class HeroService {
  getHeroes() {
    console.log('HEROES in HeroService Class');
    console.log(HEROES);
     return Promise.resolve(HEROES);
  }
}
