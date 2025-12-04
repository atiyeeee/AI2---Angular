import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  constructor() {}
  getRandom(max: number): number {
    const m = Math.max(1, Math.floor(max));
    return Math.floor(Math.random() * m) + 1;
  }
}
