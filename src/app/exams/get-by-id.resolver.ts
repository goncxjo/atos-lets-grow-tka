import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Exam } from '../api/models/exam';
import { ExamsService } from '../api/services/exams.service';
import { QuestionsService } from '../api/services/questions.service';

@Injectable()
export class GetByIdResolver implements Resolve<Observable<Exam>> {

    constructor(
        private examsService: ExamsService,
        private questionsService: QuestionsService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
      let exam_ = undefined;
      this.examsService.getById(route.paramMap.get('id'))
        .subscribe(exam => {
          exam_ = exam;
          exam_.questions = [];
          console.log("exam", exam);
          console.log("exam_",exam_);
          exam.questions.map(q => {
            this.questionsService.getById(q.id)
            .subscribe(question => {
              console.log(question);
                exam_.questions.push(question);
              })
          })
        });

        return of<Exam>(exam_);
    }
}
