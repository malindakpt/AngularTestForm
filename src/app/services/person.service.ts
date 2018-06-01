import { Injectable } from '@angular/core';
import { Person } from '../model/person';

import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personArr = [];
  constructor(private http: HttpClient) { }

  public addPerson(newPerson: Person): void {
    this.personArr.push(newPerson);
  
  }

  public getPersonArr(): Array<Person> {
    this.getJSON().subscribe(data =>
      {
        console.log(data);
      }, 
      error => console.log(error));
    return this.personArr;
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json");

  }
}
