import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo Form Array');

  skillsForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.skillsForm= this.fb.group({
      name: '',
      skills: this.fb.array([])
    });
  }

  get skills():FormArray{
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill():FormGroup{
    return this.fb.group({
      skill: '',
      experience:''
    });
  }

  addSkills(){
    this.skills.push(this.newSkill())
  }

  removeSkill(i: number){
    this.skills.removeAt(i);
  }

  onSubmit(){
    console.log(this.skillsForm.value);
  }
}
