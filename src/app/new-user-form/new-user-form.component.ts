
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  @Output() onUserCreate: EventEmitter<any> = new EventEmitter();
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
  }


  ngOnInit(): void {

  }
  get f() { return this.userForm.controls; }

  onSubmit(): void {
    this.submitted = true
    if (this.userForm.invalid) {
      return
    }
    this.onUserCreate.emit(this.userForm.value)



  }

}
