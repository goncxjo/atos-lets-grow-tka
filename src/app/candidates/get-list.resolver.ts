import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidate } from '../api/models/Candidate';
import { CandidatesService } from '../api/services/candidates.service';

@Injectable()
export class GetListResolver implements Resolve<Observable<Candidate[]>> {

    constructor(
        private service: CandidatesService
    ) { }

    resolve() {
        return this.service.getCandidates();
    }
}
