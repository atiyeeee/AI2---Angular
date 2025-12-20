import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  id?: number;
  firstName?: string;
  familyName?: string;
  age?: number;
  address?: {
    city?: string;
    street?: string;
    postCode?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class PersonService {

  private api = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.api);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.api}/${id}`);
  }

  add(person: Person): Observable<Person> {
    return this.http.post<Person>(this.api, person);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
