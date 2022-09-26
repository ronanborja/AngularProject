import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model:User = 
    {
      email: 'ronanborja1205@gmail.com',
      name: 'Ronan Borja',
      age: 21,
      active: true
    };

    submit() {
      console.log(this.model)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
