import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {
  @Input() questions;
  @Input() depthLevel = 1;
  
  constructor() { }

  ngOnInit() {
  }
  
  getIndexLetter(index, question) {
    switch (this.depthLevel) {
      case 1:
        return String.fromCharCode(index + 49) + ') ' + question
      case 2:
        return String.fromCharCode(index + 97) + ') ' + question
        // return String.fromCharCode(index + 65) + ') ' + question
      case 3:
        return "i" + ".i".repeat(index) + ') ' + question
      default:
    }
  }
}
