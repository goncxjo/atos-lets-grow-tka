import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { NameStartsWithPipe } from './name-starts-with.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExamsListComponent } from './exams-list/exams-list.component';
import { ExamsEditComponent } from './exams-edit/exams-edit.component';
import { QuestionsFormComponent } from './questions/questions-form/questions-form.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';

@NgModule({
  declarations: [
    ExamsGroupButtonComponent,
    ExamFormComponent,
    NameStartsWithPipe,
    ExamsListComponent,
    ExamsEditComponent,
    QuestionsFormComponent,
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ExamsRoutingModule,
  ]
})
export class ExamsModule { }
