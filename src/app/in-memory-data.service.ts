import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const personen = [
      {id:0, vorname:'Max', nachname:'Mustermann', email:'Max@Mustermann.de'},
      {id:1, vorname:'Peter', nachname:'Mustermann', email:'Peter@Mustermann.de'},
      {id:2, vorname:'Roland', nachname:'Mustermann', email:'Roland@Mustermann.de'},
      {id:3, vorname:'Olaf', nachname:'Mustermann', email:'Olaf@Mustermann.de'},
    ];
    return {personen};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
}