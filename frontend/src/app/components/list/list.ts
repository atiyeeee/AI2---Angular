import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Person, PersonService } from '../../services/person';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './list.html'
})
export class ListComponent implements OnInit {

  // SIGNAL zamiast zwykłej tablicy
  persons = signal<Person[]>([]);

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('LIST COMPONENT INIT');
    this.load();
  }

  load(): void {
    this.personService.getAll().subscribe({
      next: data => {
        console.log('Dane z backendu:', data);
        this.persons.set(data); // ⬅️ KLUCZOWE
      },
      error: () => alert('Błąd serwera')
    });
  }

  goToDetails(id?: number): void {
    if (id != null) {
      this.router.navigate(['/details', id]);
    }
  }

  delete(id?: number): void {
    if (id == null) return;

    if (confirm('Na pewno chcesz usunąć ten wpis?')) {
      this.personService.remove(id).subscribe({
        next: () => this.load(),
        error: () => alert('Nie udało się usunąć')
      });
    }
  }
}
