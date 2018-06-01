import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personArr = [];
  constructor() { }

  public addPerson(newPerson: Person): void {
    this.personArr.push(newPerson);
  }

  public getPersonArr(): Array<Person> {
    return this.personArr;
  }
}
