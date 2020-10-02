import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  public list
  public id
  public selectedForm
  public form

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { 
    this.list = JSON.parse(localStorage.getItem('listArray')) || []
    this.id = this.route.snapshot.paramMap.get('name')
    this.selectedForm = this.list.find(o => o.title == this.id)
  }

  // userAns = this.fb.group({
  //   optionList: this.fb.array([
  //     // this.fb.control({option: '', value: ''})
  //   ])
  // })
  
  ngOnInit(): void {
    this.form = this.selectedForm.questionList
  }

  setValue(value, options) {
  }

}
