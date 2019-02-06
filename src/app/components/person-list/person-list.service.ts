import { Injectable } from '@angular/core';
import {Person} from '../../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonListService {
  private listPersons: Person[] = [
      {
          id: 1,
          firstName: 'Katrien',
          lastName: 'Van Melle',
          gender: 'Female',
          birthdate: '26/12/1992'
      }
  ];
  getPersons(): Person[] {
    return this.listPersons;
  }

  save(person: Person) {
    this.listPersons.push(person);
  }
}
