import { Component, OnInit, Inject } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private personService: PersonService) { }

  public addPerson(): void {
    this.personService.addPerson(this.data);
    this.dialogRef.close();
    this.router.navigateByUrl('/show');
  }

  public cancel(): void {
    this.dialogRef.close();   
  }
}
