import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { GetRolesListResolver } from './get-roles-list.resolver';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'security/roles',
    component: RolesListComponent,
    resolve: {
      entity: GetRolesListResolver
    }
  },
  {
    path: 'security/users',
    component: UsersListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    GetRolesListResolver
  ]
})
export class SecurityRoutingModule { }
