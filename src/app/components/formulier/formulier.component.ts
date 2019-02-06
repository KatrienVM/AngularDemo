import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonListService } from '../person-list/person-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulier',
  templateUrl: './formulier.component.html',
  styleUrls: ['./formulier.component.css']
})
export class FormulierComponent implements OnInit {
    person: Person = {
    firstName: null,
    lastName: null,
    gender: null
};
  constructor(private personService: PersonListService) {
  }
  ngOnInit() {
  }
  savePerson(persForm: NgForm): void {
      const newPerson: Person = Object.assign({}, this.person);
      this.personService.save(newPerson);
      persForm.reset();
      console.log(this.person);
    }
}
