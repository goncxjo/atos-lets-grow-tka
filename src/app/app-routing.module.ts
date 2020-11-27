import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { StepFormComponent } from './step-form/step-form.component';


const routes: Routes = [
  {path: 'code-editor', component: CodeEditorComponent},
  {path: 'step-form', component: StepFormComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
