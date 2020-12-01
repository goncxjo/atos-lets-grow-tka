import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/api/models/exam';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.sass']
})
export class ExamsListComponent implements OnInit {
  exams: Exam[]
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { entity: Exam[] }) => {
      this.exams = data.entity;
    })
  }

  get noData() {
    return this.exams.length === 0
  }
}
