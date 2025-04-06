import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

const enum WEIGHT_UNITS {
  Pounds = 'LBS',
  Kilograms = 'KG',
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  regexForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regexForm = this.formBuilder.group({
      userName: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(25),
        ],
      ],
      userWeightUnitType: [WEIGHT_UNITS.Pounds, [Validators.required]],

      //TO-DO: link of cat profiles with their owners.
    });
  }

  onSubmit(): void {
    if (this.regexForm.valid) {
      console.log('User profile submitted: ', this.regexForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get userName(): FormControl<string | null> {
    const formUserName = this.regexForm.get('userName');
    return this.testFormType(formUserName);
  }

  get userWeightUnitType(): FormControl<WEIGHT_UNITS | null> {
    const userWeightUnitType = this.regexForm.get('userWeightUnitType');
    return this.testFormType(userWeightUnitType);
  }

  private testFormType(formValue: any) {
    if (!(formValue instanceof FormControl))
      throw new Error('type is incorrect');
    return formValue;
  }
}
