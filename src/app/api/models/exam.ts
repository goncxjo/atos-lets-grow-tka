import { Question } from "./question";

export interface Exam {
    id: number,
    name: string,
    seniority: string,
    software: string,
    difficulty: string,
    createdDate: Date,
    modifiedDate: Date,
    questions: Question[]
}
