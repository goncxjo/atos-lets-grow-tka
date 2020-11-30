import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';

const MODULES = [
  CommonModule
]

const PRIVATE_COMPONENTS = [
];

const PUBLIC_COMPONENTS = [
  TimerComponent
]

@NgModule({
  declarations: [
    ...PRIVATE_COMPONENTS,
    ...PUBLIC_COMPONENTS
  ],
  imports: MODULES,
  exports: [
    MODULES,
    ...PUBLIC_COMPONENTS
  ]
})
export class SharedModule { }
