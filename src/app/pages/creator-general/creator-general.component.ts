import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-creator-general',
  templateUrl: './creator-general.component.html',
  styleUrls: ['./creator-general.component.css']
})
export class CreatorGeneralComponent implements OnInit {
  // public questions = []

  constructor(private fb: FormBuilder, private router: Router) {
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
    let storageArray = JSON.parse(localStorage.getItem('listArray')) || []
    storageArray.push(this.questionsModel.value)
    localStorage.setItem('listArray', JSON.stringify(storageArray))

    this.questionsModel.reset()
    this.router.navigate(['creator/my-forms'])
  }

  deleteQuestion(index) {
    if (this.questions.length > 1)
      this.questions.removeAt(index)
  }

}
