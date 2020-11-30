import { Pipe, PipeTransform } from '@angular/core';
import { Exam } from '../api/models/exam';

@Pipe({
  name: 'nameStartsWith'
})
export class NameStartsWithPipe implements PipeTransform {

  transform(value: Exam[], term: string): Exam[] {
    return value.filter((x:Exam) => 
      x.name.toLowerCase().startsWith(term.toLowerCase())
    )
  }

}
