import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Getal1Component } from './components/counter/getal1/getal1.component';
import { Getal2Component } from './components/counter/getal2/getal2.component';

const routes: Routes = [
    { path: 'counter/getal1', component: Getal1Component },
    { path: 'counter/getal2', component: Getal2Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
