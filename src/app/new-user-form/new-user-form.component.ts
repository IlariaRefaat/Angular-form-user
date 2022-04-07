
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  @Output() onUserCreate: EventEmitter<any> = new EventEmitter();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      birthDate: '',
    });
  }


  ngOnInit(): void {

  }

  onSubmit(): void {
    this.onUserCreate.emit(this.userForm.value)
    

  }

}
