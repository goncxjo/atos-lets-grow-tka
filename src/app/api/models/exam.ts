import { Question } from "./question";

export interface Exam {
    id: number,
    name: string,
    line: string,
    vendor: string,
    seniority: string,
    software: string,
    difficulty: number,
    createdDate: Date,
    modifiedDate: Date,
    questions: any
}
