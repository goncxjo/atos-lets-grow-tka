import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {
  @Input() questions;
  
  constructor() { }

  ngOnInit() {
    console.log(this.questions)
  }

  getIndexLetter(type, index, question) {
    switch (type) {
      case 'a':
        return String.fromCharCode(index + 97) + ') ' + question
      case 'A':
        return String.fromCharCode(index + 65) + ') ' + question
      default:
        return String.fromCharCode(index + 49) + ') ' + question
    }
  }
}
