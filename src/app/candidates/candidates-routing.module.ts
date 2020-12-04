import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { GetListResolver } from './get-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: CandidatesListComponent,
    resolve: {
      entity: GetListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    GetListResolver
  ]
})
export class CandidatesRoutingModule { }
