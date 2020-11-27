import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../api/models/exam';
import { ExamsService } from '../api/services/exams.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  exams$: Observable<Exam[]>
  result: any

  constructor(private examsService: ExamsService) {}

  ngOnInit() {
    this.exams$ = this.examsService.getExams();
  }

  selectExam(id) {
    console.log(id);
    this.examsService.getById(id).subscribe(r => {
      this.result = r
      console.log(r);
      console.log(this.result);
    });
  }

}
