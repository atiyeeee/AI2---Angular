import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomComponent } from './random/random';
import { ListComponent } from './list/list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomComponent, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  title: string = 'Angular Signal Starter';
}