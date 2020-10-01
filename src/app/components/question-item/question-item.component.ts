import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms'
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  public questionTypes = ['multiple answers', 'one answer']
  public correctAnswers = []
  userProfile = this.fb.group({
    firstName: ['', Validators.required],
    questionType: ['', Validators.required],
    options: this.fb.array([
      this.fb.control('', Validators.required)
    ]),
    correctAns: []
  })

  ngOnInit(): void {
  }

  onSecondSubmit() {
    console.log(this.userProfile.value)
  }
  get options() {
    return this.userProfile.get('options') as FormArray
  }

  onDeleteOption(index) {
    if (this.options.length > 1)
      this.options.removeAt(index)
    //change type of question by removing index of correct answers while deleting the option  
    let _index = this.correctAnswers.indexOf(index);
    if (_index > -1) this.correctAnswers.splice(_index, 1);

    this.selectQuestionType()
  }

  selectQuestionType() {
    if (this.correctAnswers.length > 1) {
      this.userProfile.patchValue({
        questionType: this.questionTypes[0]
      })
    } else {
      this.userProfile.patchValue({
        questionType: this.questionTypes[1]
      })
    }
  }

  onSelectCorrectAns(index) {
    console.log(index)
    this.correctAnswers.push(index)
    this.userProfile.patchValue({
      correctAns: this.correctAnswers
    })

    this.selectQuestionType()

    // console.log(this.options.at(index), 'hello')
    // let tempVal = this.options.at(index)
    // tempVal.setValue({text: tempVal.value,})
  }

  addNewOption() {
    this.options.push(this.fb.control('', Validators.required))
  }
}
