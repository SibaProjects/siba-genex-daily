import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import {LoginComponent} from "./login/login.component";
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'survey', component:SurveyComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {path: 'questions', component:  QuestionsComponent },
  {path : 'answers', component : AnswersComponent},
  {path : 'logout', component : LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
