import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-show-person-list',
  templateUrl: './show-person-list.component.html',
  styleUrls: ['./show-person-list.component.css']
})
export class ShowPersonListComponent implements OnInit {

  public personArr;
  constructor(personService: PersonService) {
    this.personArr = personService.getPersonArr();
  }

  ngOnInit() {
  }

}
