import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsGroupButtonComponent } from './exams-group-button/exams-group-button.component';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { NameContainsPipe } from './name-contains.pipe';
import { NameStartsWithPipe } from './name-starts-with.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ExamsGroupButtonComponent,
    ExamFormComponent,
    NameContainsPipe,
    NameStartsWithPipe
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ExamsRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ]
})
export class ExamsModule { }
