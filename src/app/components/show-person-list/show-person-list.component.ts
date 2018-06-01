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

  constructor(personService: PersonService) {

    this.personArr = personService.getPersonArr();
    this.displayedColumns = ['firstName', 'last_name', 'emailAddress', 'subscribed','dob'];
    this.dataSource = ELEMENT_DATA;
  }

  ngOnInit() {
  }

}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

const ELEMENT_DATA: Person[] = [
  { firstName: 'Malinda', last_name: 'Hydrogen', emailAddress: '1.0079', subscribed: false, dob:'asd'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
