import {Component} from '@angular/core';
import { CounterService } from './components/counter/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    navLinks = [
    {path: 'home', label: 'Angular Demo'},
    {path: 'counter', label: 'Counter'},
    {path: 'formulier', label: 'Formulier'}
];

    constructor(private counterService: CounterService) {}

}

