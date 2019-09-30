import { Component, Input, OnInit } from '@angular/core';
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

   ngOnInIt() {
     console.log(this.questions);
     console.log(this.answers);
   
     for (const index in this.questions) {
       if (this.questions.hasOwnProperty(index)) {
         this.questionAnswers.push({ q: this.questions[index].label, a: this.answers.values[index] });
       }
     }
     console.log(this.questionAnswers);
   }

}
