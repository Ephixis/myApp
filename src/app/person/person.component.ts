import { Component } from '@angular/core';
import { Person } from '../person';



@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
    person: Person = {
      id: 1,
      vorname: "Max",
      nachname: "Mustermann",
      email: "Max@Mustermann.de"
    };
}
