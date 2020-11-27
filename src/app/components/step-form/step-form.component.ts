import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.sass']
})
export class StepFormComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      firstFormGroup: this.fb.group({
        firstCtrl: ['', Validators.required]
      }),
      secondFormGroup: this.fb.group({
        secondCtrl: ['', Validators.required]
      }),
      thirdFormGroup: this.fb.group({
        thirdCtrl: ['', Validators.required]
      })
    });
  }
}
