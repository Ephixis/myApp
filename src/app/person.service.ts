import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { PERSONEN } from './mock-person';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  private personUrl = 'api/personen';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

    private log(message: string){
      this.messageService.add(`PersonService: ${message}`);
    }


    getPersonen(): Observable<Person[]> {
      return this.http.get<Person[]>(this.personUrl)
      .pipe(
        tap(_ => this.log('fetched person')),
        catchError(this.handleError<Person[]>('getPerson', []))
      );
    }

    getPerson(id: number): Observable<Person> {
      const url = `${this.personUrl}/${id}`;
      return this.http.get<Person>(url).pipe(
        tap(_ => this.log(`fetched person id=${id}`)),
        catchError(this.handleError<Person>(`getPerson id=${id}`))
      );
    }


    updatePerson(person: Person): Observable<any> {
      return this.http.put(this.personUrl, person, this.httpOptions).pipe(
       tap(_ => this.log(`updated Person id=${person.id}`)),
        catchError(this.handleError<any>('updatePerson'))
      );
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
    
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

addPerson(person: Person): Observable<Person> {
  return this.http.post<Person>(this.personUrl, person, this.httpOptions).pipe(
    tap((newPerson: Person) => this.log(`added person w/ id=${newPerson.id}`)),
    catchError(this.handleError<Person>('addPerson'))
);
}

/** DELETE: delete the hero from the server */
  deletePerson(id: number): Observable<Person> {
    const url = `${this.personUrl}/${id}`;

    return this.http.delete<Person>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
   );
  }


}
