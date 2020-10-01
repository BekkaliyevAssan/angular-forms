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
  userProfile = this.fb.group({
    firstName: ['', Validators.required],
    questionType: ['', Validators.required],
    options: this.fb.array([
      this.fb.control('', Validators.required)
    ])
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
    if(this.options.length > 1)
      this.options.removeAt(index)
  }

  onSelectCorrectAns(index) {
    console.log(index)
  }
  
  addNewOption() {
    this.options.push(this.fb.control('', Validators.required))
  }
}
