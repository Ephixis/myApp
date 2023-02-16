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

  add(a: string, vorname: string, nachname:string, email:string): void {
    var id = Number(a);
    vorname = vorname.trim();
    nachname = nachname.trim();
    email = email.trim();
    if (!a || !vorname || !nachname || !email) { return; }
    this.personService.addPerson({ id, vorname, nachname, email }  as Person)
      .subscribe(person => {
        this.personen.push(person);
      });
  }

  toNumber(temp: string){
    return Number(temp.trim());
  }
}



