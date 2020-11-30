import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from '../models/exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  private baseRoute: string;

  constructor(
    @Inject('BASE_API_URL') baseUrl: string,
    private http: HttpClient
  ) {
    // this.baseRoute = baseUrl + '/exams'
    this.baseRoute = '/api/exams'
  }

  getExams(): Observable<Exam[]> {
    const url = `${this.baseRoute}`
    return this.http.get<Exam[]>(url);
  }

  getById(id): Observable<Exam> {
    const url = `${this.baseRoute}/${id}`
    return this.http.get<Exam>(url);
  }
}
