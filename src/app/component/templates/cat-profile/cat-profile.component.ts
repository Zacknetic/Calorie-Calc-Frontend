import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cat-profile',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './cat-profile.component.html',
  styleUrl: './cat-profile.component.scss',
})
export class CatProfileComponent {
  regexForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regexForm = this.formBuilder.group({
      catName: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20),
        ],
      ],
      currentWeight: [
        null,
        [Validators.required, Validators.max(99), Validators.min(0.01)],
      ],
    });
  }

  //TO-DO add cat breed. Back it up with science.

  onSubmit(): void {
    if (this.regexForm.valid) {
      console.log('Name Submitted', this.regexForm.value);
      console.log('cat name form control: ', this.catName);
    } else {
      console.log('Form is invalid');
    }
  }

  get catName(): FormControl<string | null> {
    const formCatName = this.regexForm.get('catName');
    return this.testFormType(formCatName);
  }

  get currentWeight(): FormControl<number | null> {
    const currentWeight = this.regexForm.get('currentWeight');
    return this.testFormType(currentWeight);
  }

  get allFormValues() {
    const formValues = this.regexForm.value;
    return formValues;
  }

  private testFormType(formValue: any) {
    if (!(formValue instanceof FormControl))
      throw new Error('type is incorrect');
    return formValue;
  }
}
