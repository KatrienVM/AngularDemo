import { Component, OnInit } from '@angular/core';
import {CounterService} from '../../../counter.service';

@Component({
  selector: 'app-getal2',
  templateUrl: './getal2.component.html',
  styleUrls: ['./getal2.component.css']
})
export class Getal2Component implements OnInit {
    constructor(private counterService: CounterService) {}
    public getCount() {
        return this.counterService.counterValue2;
    }
    public increment() {
        this.counterService.counterValue2 += 1;
    }

    public decrement() {
        this.counterService.counterValue2 -= 1;
    }
  ngOnInit() {
  }

}
