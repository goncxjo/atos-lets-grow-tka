import { Pipe, PipeTransform } from '@angular/core';
import { Exam } from '../api/models/exam';

@Pipe({
  name: 'nameContains'
})
export class NameContainsPipe implements PipeTransform {

  transform(value: Exam[], term: string = ''): Exam[] {
    return value.filter((x:Exam) => 
      x.name.toLowerCase().includes(term.toLowerCase())
    )
  }

}
