import { Component, OnInit } from '@angular/core';
import {CounterService} from '../../../counter.service';

@Component({
  selector: 'app-getal1',
  templateUrl: './getal1.component.html',
  styleUrls: ['./getal1.component.css']
})
export class Getal1Component implements OnInit {

    /*counterValue1 = 5;
    increment() {
        this.counterValue1++;
    }
    decrement() {
        this.counterValue1--;
    }

  constructor() { }*/

    constructor(private counterService: CounterService) {}
    public getCount() {
        return this.counterService.counterValue1;
    }
    public increment() {
        this.counterService.counterValue1 += 1;
    }

    public decrement() {
        this.counterService.counterValue1 -= 1;
    }

  ngOnInit() {
  }

}
