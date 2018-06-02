import {Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ShowPersonListComponent } from './components/show-person-list/show-person-list.component';
import { PersonService } from './services/person.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
	{ path: 'add', component: PersonDetailComponent },
	{ path: 'show', component: ShowPersonListComponent }, 
	{ path: '', redirectTo: '/show', pathMatch: 'full' }
] 

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    ConfirmationDialogComponent,
    ShowPersonListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    PersonService,
    HttpClient,

  ],
  entryComponents:[
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
