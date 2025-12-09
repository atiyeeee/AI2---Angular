import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Person, PersonService } from '../../services/person';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.html'
})
export class AddPersonComponent {
  person: Person = { address: {} };

  constructor(private personService: PersonService, private router: Router) { }

  save() {
    if (!this.person.firstName || !this.person.familyName) {
      alert('Podaj imię i nazwisko');
      return;
    }
    this.personService.add(this.person);
    this.router.navigate(['/']);
  }
}
