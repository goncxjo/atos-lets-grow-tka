import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private baseRoute: string;

  constructor(
    @Inject('BASE_API_URL') baseUrl: string,
    private http: HttpClient
  ) {
    this.baseRoute = '/api/questions'
  }

  getQuestions(): Observable<Question[]> {
    const url = `${this.baseRoute}`
    return this.http.get<Question[]>(url);
  }

  getById(id): Observable<Question> {
    const url = `${this.baseRoute}/${id}`
    return this.http.get<Question>(url);
  }
}
