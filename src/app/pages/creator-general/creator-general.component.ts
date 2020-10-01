import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms'
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-creator-general',
  templateUrl: './creator-general.component.html',
  styleUrls: ['./creator-general.component.css']
})
export class CreatorGeneralComponent implements OnInit {
  // public questions = []
  
  constructor(private fb: FormBuilder) {
  }
  questionsModel = this.fb.group({
    title: ['', Validators.required],
    questionList: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  })
  

  get questions() {
    return this.questionsModel.get('questionList') as FormArray 
  }

  onAddQuestion() {
    this.questions.push(this.fb.control('', Validators.required))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.questionsModel.value)
  }

}
