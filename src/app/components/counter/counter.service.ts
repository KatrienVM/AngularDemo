import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

    public counterValue1 = 0;
    public counterValue2 = 0;

  constructor() { }
}
