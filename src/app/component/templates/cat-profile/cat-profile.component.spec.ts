import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CatProfileComponent } from './cat-profile.component';

describe('CatProfileComponent', () => {
  let component: CatProfileComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CatProfileComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(CatProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when catName is empty', () => {
    component.catName.setValue('');
    expect(component.regexForm.invalid).toBeTruthy();
  });

  it('should have a valid form when catName is provided and within length limits', () => {
    component.catName.setValue('Whiskers');
    component.currentWeight.setValue(1.5);
    expect(component.regexForm.valid).toBeTruthy();
  });

  it('should have an invalid form when catName is too long', () => {
    component.catName.setValue('a'.repeat(21)); // Exceeds max length of 20
    component.currentWeight.setValue(1.5);
    expect(component.regexForm.invalid).toBeTruthy();
  });

  it('should log "Name Submitted" and the form value when form is valid and onSubmit is called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.catName.setValue('Whiskers');
    component.currentWeight.setValue(1.5);
    component.onSubmit();
    expect(consoleSpy).toHaveBeenCalledWith('Name Submitted', {
      catName: 'Whiskers',
      currentWeight: 1.5,
    });
  });

  it('should log "Form is invalid" when form is invalid and onSubmit is called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.catName.setValue('');
    component.onSubmit();
    expect(consoleSpy).toHaveBeenCalledWith('Form is invalid');
  });

  it('should have a form control "catName"', () => {
    expect(component.catName).toBeTruthy();
  });

  it('should have initial value of catName as an empty string', () => {
    expect(component.catName.value).toBe(null);
  });

  it('should return an error if formCatName is not an instanceof FormControl', () => {
    // Mock the form control to simulate it being something other than FormControl
    const invalidControl = {} as any; // Simulating an invalid type
    spyOn(component.regexForm, 'get').and.returnValue(invalidControl);

    // Test if the correct error is thrown
    expect(() => component.catName).toThrowError('type is incorrect');
  });

  it('should get all form values', () => {
    component.catName.setValue('Whiskers');
    component.currentWeight.setValue(1.5);
    expect(component.allFormValues).to({
      catName: 'Whiskers',
      currentWeight: 1.5,
    });
  });
});
