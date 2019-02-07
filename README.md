# Tabs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---------------------------------------------------------------------------------------------------------------------------------------

## Demo opdracht Angular

### Navigatie balken
Maak bovenaan de pagina een navigatie balk met twee opties: “Counter” en “Formulier”. Laat in
deze balk ook een getal zien (gewoon tekst, geen navigatie-optie), die je voorlopig op 0 mag laten
staan. Als de counter tab wordt geselecteerd verschijnt er een tweede navbalk met de opties
“getal1” en “getal2”. Gebruik hiervoor geneste routes in de routing module.

### Counter
Maak een component aan waarmee je een getal kan optellen of aftrekken met 1. Gebruik dit
component in zowel “getal1” als “getal2”. Maak een service aan waarin getal1 en getal2 worden
bewaard, en telkens die veranderen door interacties met het component wordt dus de service
geüpdate.

Ten laatste maak een directive aan die automatisch de inhoud van het element waarop het wordt
toegepast verandert naar de waarde van getal1 + getal2. Pas deze directive toe op het getal in de
eerste navigatie bar.

### Formulier
In de formulier tab maak je een formulier aan waarmee een persoon basisgegevens kan doorsturen.
Zoek en instaleer hiervoor een aantal angular componenten, zoals bv. een custom select om geslacht
te selecteren. Alle data wordt strongly-typed opgeslagen (gebruik dus strings, ints, booleans, … ipv
standaard js objecten die niet een speciefiek type hebben). Maak een klasse aan voor persoon, en
wanneer de gebruiker op een “versturen” knop duwt wordt er een Persoon object aangemaakt,
opgevuld, en opgeslagen.

In het formulier kan je eventueel gebruik maken van validatie. Ook mag je weer een extern
component instaleren die validatie kan doen.
Maak een component aan om een Persoon weer te geven. Zorg ervoor dat voor elke aangemaakte
persoon er onder het formulier een component met de gegevens van die persoon wordt
weergegeven.
