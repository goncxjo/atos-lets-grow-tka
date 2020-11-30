import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Exam } from '../api/models/exam';
import { ExamsService } from '../api/services/exams.service';

@Injectable()
export class GetByIdResolver implements Resolve<Observable<Exam>> {

    constructor(
        private service: ExamsService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getById(route.paramMap.get('id'));
    }
}