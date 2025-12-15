import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { gte } from './validators/gteValidator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Model Driven Forms Demo.');

  //contactForm : FormGroup=new FormGroup({}); //For initializing FormGroup with no child Form Control
  // contactForm: FormGroup=new FormGroup({
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //   lastName: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   country: new FormControl(),
  //   age: new FormControl('', [gte])
  // });

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: [''],
      gender: [''],
      country: [''],
      age: ['', [gte]]
    });
  }

  get firstName(){
    return this.contactForm.get('firstName');
  }

  get lastName(){
    return this.contactForm.get('lastName');
  }
  
  get email(){
    return this.contactForm.get('email');
  }
  
  get gender(){
    return this.contactForm.get('gender');
  }

  get country(){
    return this.contactForm.get('country');
  }

  get age(){
    return this.contactForm.get('age');
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }
}
