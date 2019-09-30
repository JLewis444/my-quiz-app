import { Component, NgModule } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Quiz, Answers, Choice } from './quiz.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
 
@NgModule()
export class AppComponent {
  constructor() {}
}

