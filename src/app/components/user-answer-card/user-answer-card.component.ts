import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-answer-card',
  templateUrl: './user-answer-card.component.html',
  styleUrls: ['./user-answer-card.component.css']
})
export class UserAnswerCardComponent implements OnInit {
  @Input() i: number
  @Input() f
  constructor(private fb: FormBuilder) { }

  userAns = this.fb.group({
    options: this.fb.array([
    ])
  })
    
  ngOnInit(): void {
    
  }

}
