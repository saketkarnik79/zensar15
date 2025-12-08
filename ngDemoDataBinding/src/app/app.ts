import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo for DataBinding in Angular');
  firstName:string = 'James';
  lastName:string = 'Bond';
  showButton: boolean = true;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  changeName(): void {
    this.firstName = 'Steve';
    this.lastName = 'Smith';
  }
}
