import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/api/models/exam';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.sass']
})
export class ExamsListComponent implements OnInit {
  page = 1;
  pageSize = 5;
  collectionSize: number;
  EXAMS: Exam[]
  exams: Exam[]

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { entity: Exam[] }) => {
      this.EXAMS = data.entity;
      this.collectionSize = this.EXAMS.length;
      this.refreshExams();
    })
  }

  get noData() {
    return this.exams.length === 0
  }

  refreshExams() {
    this.exams = this.EXAMS
      .map((exam, i) => ({id: i + 1, ...exam}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getTotalStars() {
    return [...Array(5).keys()]
  }
}
