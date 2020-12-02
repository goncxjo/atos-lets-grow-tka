import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/api/models/exam';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.sass']
})
export class ExamFormComponent implements OnInit {
  exam: Exam
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { entity: Exam }) => {
      this.exam = data.entity;
      console.log(this.exam)
    })
  }
}
