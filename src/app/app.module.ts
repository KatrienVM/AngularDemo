import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterService} from './components/counter/counter.service';
import { PersonListService} from './components/person-list/person-list.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MAT_DATE_LOCALE,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
} from '@angular/material';

import { MatTabsModule} from '@angular/material';
import { CounterComponent } from './components/counter/counter.component';
import { FormulierComponent } from './components/formulier/formulier.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Getal1Component } from './components/counter/getal1/getal1.component';
import { Getal2Component } from './components/counter/getal2/getal2.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './components/person-list/person-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'formulier', component: FormulierComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormulierComponent,
    HomeComponent,
    Getal1Component,
    Getal2Component,
    PersonListComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatTabsModule,
      RouterModule.forRoot(
          appRoutes
      ),
      AppRoutingModule,

      // formulier
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule
  ],
  providers: [CounterService, PersonListService, {provide: MAT_DATE_LOCALE, useValue: 'nl-BE'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
