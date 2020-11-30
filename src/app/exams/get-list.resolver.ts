import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Exam } from '../api/models/exam';
import { ExamsService } from '../api/services/exams.service';

@Injectable()
export class GetListResolver implements Resolve<Observable<Exam[]>> {

    constructor(
        private service: ExamsService
    ) { }

    resolve() {
        return this.service.getExams();
    }
}