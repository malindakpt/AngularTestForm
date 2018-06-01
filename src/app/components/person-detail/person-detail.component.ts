import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  detailFormGrp: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog) {
    this.detailFormGrp = this.formBuilder.group({
      'firstName': new FormControl('', [Validators.required]),
      'last_name': new FormControl('', [Validators.required]),
      'subscribed': new FormControl('', []),
      'emailAddress': new FormControl('', [Validators.required, Validators.email]),
      'dob': new FormControl('', [Validators.required]),
    });
   }

  ngOnInit() {
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
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  

// email = new FormControl('', [Validators.required, Validators.email]);
email = new FormControl();
month = new FormControl();
getErrorMessage() {
  return this.month.hasError('required') ? 'You must enter a value' :
      this.month.hasError('email') ? 'Not a valid email' :
          '';
}
}
