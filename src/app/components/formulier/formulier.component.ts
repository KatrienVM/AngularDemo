import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-formulier',
  templateUrl: './formulier.component.html',
  styleUrls: ['./formulier.component.css']
})
export class FormulierComponent implements OnInit {
    person: Person = {
    id: null,
    firstName: null,
    lastName: null,
    gender: null
};

  constructor() { }

  ngOnInit() {
  }

  savePerson(newPerson: Person): void {
    console.log(newPerson);
  }

}
