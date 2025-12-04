import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrls: ['./list.less']
})
export class ListComponent {
  newItem: string = '';
  items: string[] = [];

  add() {
    const v = this.newItem.trim();
    if (!v) return;
    this.items.push(v);
    this.newItem = '';
  }

  remove(index: number) {
    if (index < 0 || index >= this.items.length) return;
    this.items.splice(index, 1);
  }
}
