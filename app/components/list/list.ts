import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Person, PersonService } from '../../services/person';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html'
})
export class ListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.persons = this.personService.getAll();
  }

  goToDetails(index: number) {
    this.router.navigate(['/details', index]);
  }

  delete(index: number) {
    if (confirm('Na pewno chcesz usunąć ten wpis?')) {
      const ok = this.personService.remove(index);
      if (ok) this.load();
      else alert('Nie można usunąć: nieprawidłowy indeks');
    }
  }
}
