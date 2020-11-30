import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { ExamsGroupButtonComponent } from './exams-group-button/exams-group-button.component';
import { GetByIdResolver } from './get-by-id.resolver';
import { GetListResolver } from './get-list.resolver';

const routes: Routes = [
  {
    path: 'exams',
    children: [
      {
        path: '',
        component: ExamsGroupButtonComponent,
        resolve: {
          entity: GetListResolver
        }
      },
      {
        path: ':id',
        component: ExamFormComponent,
        resolve: {
          entity: GetByIdResolver
        }
      },
      // { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    , { enableTracing: true }
    )],
  exports: [RouterModule],
  providers: [
    GetListResolver,
    GetByIdResolver
  ]
})
export class ExamsRoutingModule { }
