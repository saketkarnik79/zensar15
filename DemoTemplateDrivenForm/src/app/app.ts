import { Component, signal, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Country } from './country';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('DemoTemplateDrivenForm');

  countryList: Country[] = [
    new Country("1", 'India'),
    new Country("2", 'Australia'),
    new Country("3", 'Russia'),
    new Country("4", 'England'),
    new Country("5", 'France'),
  ];
  contact: Contact=new Contact('','','','','','','','');
  @ViewChild('contactForm') contactForm!: NgForm;

  ngOnInit(): void {
      console.log("ngOnInit() Invoked...");
      this.contact.firstName="James";
      this.contact.lastName="Bond";
      this.contact.email="007@mi6.com";
      this.contact.gender="Male";
      this.contact.address = {
        street: "XYZ",
        city: "London",
        country: "4",
        pincode: "011234"
      };
  }

  onSubmit(contactForm: NgForm){
    console.log(contactForm.value);
  }

  changeEmail(){
    this.contactForm.controls['email'].setValue("james@mi6.com");
  }

  reset(){
    this.contactForm.reset();
  }
}
