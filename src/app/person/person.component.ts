import { Component } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
    
  personen: Person[] = [];
  selectedPerson?: Person;

  constructor(private personService: PersonService){};
  ngOnInit(): void{
    this.getPersonen();
  }

    
  onSelect(person: Person): void{
    this.selectedPerson = person;
   }

  getPersonen(): void{
    this.personen = this.personService.getPersonen();
  }
}



