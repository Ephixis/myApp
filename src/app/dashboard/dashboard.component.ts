import { Component } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  personen: Person[] = [];

  constructor(private personService: PersonService){}

  ngOnInit(): void{
    this.getPersonen();
  }

getPersonen():void{
  this.personService.getPersonen().subscribe(personen => this.personen = personen);
}

}
