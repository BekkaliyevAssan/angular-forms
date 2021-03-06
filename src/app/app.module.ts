import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { CreatorComponent } from './pages/creator/creator.component';
import { CreatorGeneralComponent } from './pages/creator-general/creator-general.component';
import { SeeResultComponent } from './pages/see-result/see-result.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { MyFormsComponent } from './pages/my-forms/my-forms.component';
import { FormDetailsComponent } from './pages/form-details/form-details.component';
import { UserAnswerCardComponent } from './components/user-answer-card/user-answer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    CreatorComponent,
    CreatorGeneralComponent,
    SeeResultComponent,
    QuestionItemComponent,
    MyFormsComponent,
    FormDetailsComponent,
    UserAnswerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
