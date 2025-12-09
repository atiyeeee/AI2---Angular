import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Person, PersonService } from '../../services/person';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html'
})
export class DetailsComponent implements OnInit, OnDestroy {
  person?: Person;
  private sub?: Subscription;
  index?: number;

  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.index = id !== null ? Number(id) : undefined;
      if (this.index === undefined || isNaN(this.index)) {
        this.person = undefined;
      } else {
        this.person = this.personService.getByIndex(this.index);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
