import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Person } from './person';
import { PERSONEN } from './mock-person';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  constructor(private messageService: MessageService) { }

  getPersonen():Observable<Person[]>{
    const personen = of(PERSONEN);
    this.messageService.add('PersonService: fetched personen');
    return personen;
  }
}
