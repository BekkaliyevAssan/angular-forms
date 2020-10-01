import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-general',
  templateUrl: './creator-general.component.html',
  styleUrls: ['./creator-general.component.css']
})
export class CreatorGeneralComponent implements OnInit {
  public questions = []
 
  constructor() {
  }

  ngOnInit(): void {
  }

}
