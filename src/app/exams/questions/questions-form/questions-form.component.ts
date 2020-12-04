import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.sass']
})
export class QuestionsFormComponent implements OnInit {
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
