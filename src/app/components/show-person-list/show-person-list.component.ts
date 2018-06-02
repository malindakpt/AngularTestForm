import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person';

@Component({
  selector: 'app-show-person-list',
  templateUrl: './show-person-list.component.html',
  styleUrls: ['./show-person-list.component.css']
})
export class ShowPersonListComponent implements OnInit {

  public personArr;
  public dataSource;
  public displayedColumns;
  public displayedColumnsMob;

  constructor(personService: PersonService) {
    this.personArr = personService.getPersonArr();
    this.displayedColumns = ['firstName', 'last_name', 'emailAddress', 'subscribed','dob'];
    this.displayedColumnsMob = ['firstName', 'subscribed'];
    this.dataSource =  personService.getPersonArr();
  }
}

