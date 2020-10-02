import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit {
  public forms
  constructor() {
    this.forms = JSON.parse(localStorage.getItem('listArray')) || []
  }

  ngOnInit(): void {
  }

}
