import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'exams',
    loadChildren: () => import('./exams/exams.module').then(m => m.ExamsModule),
  },
  {
    path: 'candidates',
    loadChildren: () => import('./candidates/candidates.module').then(m => m.CandidatesModule),
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule),
  },
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  // {path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
