import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSONEN } from './mock-person';



@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  constructor() { }

  getPersonen():Person[]{
    return PERSONEN;
  }
}
