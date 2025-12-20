import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Person, PersonService } from '../../services/person';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './details.html'
})
export class DetailsComponent implements OnInit {

  // Signal dla osoby
  person = signal<Person | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : undefined;

    if (id === undefined || isNaN(id)) {
      this.person.set(undefined);
      return;
    }

    this.personService.getById(id).subscribe({
      next: p => this.person.set(p),
      error: () => this.person.set(undefined)
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
