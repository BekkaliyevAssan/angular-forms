import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray, ControlContainer } from '@angular/forms'
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  constructor(private fb: FormBuilder, private controlContainer: ControlContainer) { }
  public questionTypes = ['multiple answers', 'one answer']
  public correctAnswers = []
  @Input() order: number
  public ogFormGroup
  // userProfile = this.fb.group({
  //   firstName: ['', Validators.required],
  //   questionType: ['', Validators.required],
  //   options: this.fb.array([
  //     this.fb.control('', Validators.required)
  //   ]),
  //   correctAns: []
  // })

  ngOnInit(): void {
    this.ogFormGroup = this.controlContainer.control;
  }

  onSecondSubmit() {
    console.log(this.ogFormGroup.value)
  }
  get options() {
    return this.ogFormGroup.get('options') as FormArray
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
      this.ogFormGroup.patchValue({
        questionType: this.questionTypes[0]
      })
    } else {
      this.ogFormGroup.patchValue({
        questionType: this.questionTypes[1]
      })
    }
  }

  onSelectCorrectAns(index) {
    if(!this.correctAnswers.includes(index)) {

      console.log(index)
      this.correctAnswers.push(index)
      this.ogFormGroup.patchValue({
        correctAns: this.correctAnswers
      })
      
      this.selectQuestionType()
    }

    // console.log(this.options.at(index), 'hello')
    // let tempVal = this.options.at(index)
    // tempVal.setValue({text: tempVal.value,})
  }

  addNewOption() {
    this.options.push(this.fb.control('', Validators.required))
  }

}
