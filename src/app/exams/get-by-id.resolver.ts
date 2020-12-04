import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap, flatMap } from 'rxjs/operators';
import { Exam } from '../api/models/exam';
import { Question } from '../api/models/question';
import { ExamsService } from '../api/services/exams.service';
import { QuestionsService } from '../api/services/questions.service';

@Injectable()
export class GetByIdResolver implements Resolve<Observable<Exam>> {

  private exam: Exam
  private questions: Question[]

  mapQuestions(id: number) {
    var question = this.questions.filter((q: Question) => q.id === id)[0];

    if(question && question.questions) {
      if(question.questions) {
        var qs = question.questions.map(questionId => this.mapQuestions(questionId))
        question.questions = qs;
      }
    }

    return question;
  }

    constructor(
        private examsService: ExamsService,
        private questionsService: QuestionsService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
      var id = route.paramMap.get('id');
      console.log(id);;

      return this.examsService.getById(id).pipe(
        tap(e => this.exam = e),
        flatMap(e => this.questionsService.getQuestions()),
        flatMap(qs => {
          this.questions = qs;
          let qs_ = this.exam.questions.map(questionId => this.mapQuestions(questionId));
          this.exam.questions = qs_;
          return of<Exam>(this.exam);
        })
      );
    }
}
