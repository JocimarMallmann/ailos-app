import { Person } from './../shared/interfaces/person.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckCpfService {

  constructor() { }


  consultCpf(cpf: string): Observable<Person> {
    let foundPerson: Person = {};

    if(mock.some((person) => person.cpf === cpf)) {
      foundPerson = mock.filter((person) => person.cpf === cpf)[0];
    }
    return of(foundPerson);
  }

}

const mock: Person[] = [
  {
    cpf: '20466801890',
    name: 'Márcio João Dias',
    status: 'Regular'
  }
];
