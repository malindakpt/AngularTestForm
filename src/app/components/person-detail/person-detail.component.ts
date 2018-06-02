import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../model/person';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public detailFormGrp: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private personService: PersonService,
    public dialog: MatDialog) {
    this.setData({});

  }

  public ngOnInit(): void {
    this.personService.getJSON().subscribe(data => {
      this.setData(data);
    },
      error => console.log(error));
  }

  private setData(data: any): void {
    this.detailFormGrp = this.formBuilder.group({
      'firstName': new FormControl(data.firstName, [Validators.required]),
      'last_name': new FormControl(data.last_name, [Validators.required]),
      'subscribed': new FormControl(data.subscribed, []),
      'emailAddress': new FormControl(data.emailAddress, [Validators.required, Validators.email]),
      'dob': new FormControl(data.dob, [Validators.required]),
    });
  }

  public createNewPerson(newPerson: Person): void {
    this.checkConfirmation(newPerson);
  }

  public checkConfirmation(newPerson: Person): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: newPerson
    });

    dialogRef.afterClosed().subscribe(result => {
      // dialog closed
    });
  }
}
