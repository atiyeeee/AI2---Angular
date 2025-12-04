// src/app/random/random.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from '../random'; 

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.html',
  styleUrls: ['./random.less']
})
export class RandomComponent {
  @Input() max: number = 10; 
  current: number | null = null;

  constructor(private randomService: RandomService) {}

  generate() {
    this.current = this.randomService.getRandom(this.max);
  }

  get isLow(): boolean {
    if (this.current === null) return false;
    return this.current <= 0.5 * this.max;
  }
}
