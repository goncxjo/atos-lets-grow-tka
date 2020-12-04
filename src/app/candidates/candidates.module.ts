import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";

import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesRoutingModule } from './candidates-routing.module';



@NgModule({
  declarations: [CandidatesListComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    LayoutModule,
    CandidatesRoutingModule
  ]
})
export class CandidatesModule { }
