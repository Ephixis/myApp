import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSONEN } from './mock-person';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  constructor() { }

  getPersonen():Observable<Person[]>{
    const personen = of(PERSONEN);
    return personen;
  }
}
