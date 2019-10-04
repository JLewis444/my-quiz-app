import { Component, OnInit, Input } from '@angular/core';
import { Answers, Question } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  @Input() answers: Answers;
  @Input() questions: Question;
  questionAnswers = [];

   constructor() {}

   ngOnInit() {
    console.log(this.questions);
    console.log(this.answers);

    // for (let i = 0; i < this.questions.keys.length; i++) {
    //   this.questionAnswers.push({ q: this.questions[i], a: this.answers.values[i] });
    // }

    for (const index in this.questions) {
      if (this.questions.hasOwnProperty(index)) {
        this.questionAnswers.push({ q: this.questions[index].label, a: this.answers.values[index] });
      }
    }
    console.log(this.questionAnswers);
  }

}
