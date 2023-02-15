import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  selectedPerson?: Person;
  personen: Person[] = [];
  
  constructor(private personService: PersonService, private messageService: MessageService){};
  
  ngOnInit(): void{
    this.getPersonen();
  }

  getPersonen(): void{
    this.personService.getPersonen().subscribe(personen => this.personen = personen);
  }
}



