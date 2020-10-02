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
      this.fb.group({
        firstName: ['', Validators.required],
        questionType: ['', Validators.required],
        options: this.fb.array([
          this.fb.control('', Validators.required)
        ]),
        correctAns: []
      })
    ])
  })

  get questions() {
    return this.questionsModel.get('questionList') as FormArray
  }

  get emptyFirstName(): boolean {
    // return 
    let tempQuesion = this.questions.value
    if (tempQuesion[tempQuesion.length - 1].firstName == '' || !tempQuesion[tempQuesion.length - 1].correctAns) {
      return true
    }
    else return false
  }

  onAddQuestion() {
    this.questions.push(this.fb.group({
      firstName: ['', Validators.required],
      questionType: ['', Validators.required],
      options: this.fb.array([
        this.fb.control('', Validators.required)
      ]),
      correctAns: []
    }))

    
  }

  ngOnInit(): void {
  }
    onSubmit() {
    console.log(this.questionsModel.value)
  }

  deleteQuestion(index) {
    if (this.questions.length > 1)
      this.questions.removeAt(index)
  }

}
