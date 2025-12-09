import { Injectable } from '@angular/core';

export interface Person {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: {
    city?: string;
    street?: string;
    postCode?: string;
  };
}

const STORAGE_KEY = 'personsData';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private readStorage(): Person[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      const arr = JSON.parse(raw) as Person[];
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }

  private writeStorage(arr: Person[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  getAll(): Person[] {
    return this.readStorage();
  }

  getByIndex(index: number): Person | undefined {
    const arr = this.readStorage();
    return (index >= 0 && index < arr.length) ? arr[index] : undefined;
  }

  add(person: Person): void {
    const arr = this.readStorage();
    arr.push(person);
    this.writeStorage(arr);
  }

  remove(index: number): boolean {
    const arr = this.readStorage();
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
      this.writeStorage(arr);
      return true;
    }
    return false;
  }
}
