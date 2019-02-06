import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/person.model';
import { PersonListService } from './person-list.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[];
  constructor(private personService: PersonListService) { }

  ngOnInit() {
    this.persons = this.personService.getPersons();
  }

}
