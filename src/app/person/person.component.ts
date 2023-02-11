import { Component } from '@angular/core';
import { Person } from '../person';
import { PERSONEN } from '../mock-person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
    
    personen = PERSONEN;
    selectedPerson?: Person;
    
    onSelect(person: Person): void{
      this.selectedPerson = person;
    }
}



