import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../../api/models/exam';

@Component({
  selector: 'app-exams-group-button',
  templateUrl: './exams-group-button.component.html',
  styleUrls: ['./exams-group-button.component.sass']
})
export class ExamsGroupButtonComponent implements OnInit {
  exams: Exam[]
  searchText
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { entity: Exam[] }) => {
      this.exams = data.entity;
      console.log('data.entity', data.entity);
      console.log('this.exams', this.exams);
    })
  }
}
