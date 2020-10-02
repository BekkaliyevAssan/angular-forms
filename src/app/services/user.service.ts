import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formsArray
  pushArrayForm: Subject<any> = new Subject<any>()
  constructor() { 
    this.pushArrayForm.subscribe(data => {
      this.formsArray = data
    })
  }
}
