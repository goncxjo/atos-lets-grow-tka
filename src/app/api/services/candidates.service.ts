import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private baseRoute: string;

  constructor(
    @Inject('BASE_API_URL') baseUrl: string,
    private http: HttpClient
  ) {
    this.baseRoute = '/api/candidates'
  }

  getCandidates(): Observable<Candidate[]> {
    const url = `${this.baseRoute}`
    return this.http.get<Candidate[]>(url);
  }

  getById(id): Observable<Candidate> {
    const url = `${this.baseRoute}/${id}`
    return this.http.get<Candidate>(url);
  }
}
