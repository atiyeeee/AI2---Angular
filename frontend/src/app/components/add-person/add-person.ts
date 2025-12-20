import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Person, PersonService } from '../../services/person';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule],
  templateUrl: './add-person.html'
})
export class AddPersonComponent {
  person: Person = { address: {} };

  constructor(private personService: PersonService, private router: Router) { }

  save() {
    this.personService.add(this.person).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => alert(err.error?.message || 'Błąd')
    });
  }
}
