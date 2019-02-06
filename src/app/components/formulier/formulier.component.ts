import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonListService } from '../person-list/person-list.service';
import {NgForm} from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-formulier',
  templateUrl: './formulier.component.html',
  styleUrls: ['./formulier.component.css']
})
export class FormulierComponent implements OnInit {
    datePickerConfig: Partial<BsDatepickerConfig>;
    person: Person = {
        id: null,
        firstName: null,
        lastName: null,
        gender: null,
        birthdate: null
};
  constructor(private personService: PersonListService) {
      this.datePickerConfig = Object.assign({},
          {
              containerClass: 'theme-dark-blue',
              dateInputFormat: 'DD/MM/YYYY'
          });
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
