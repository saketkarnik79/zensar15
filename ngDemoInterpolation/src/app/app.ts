import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Item from './Item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Interpolation Demo');

  firstName: string = 'John';
  lastName: string = 'Doe';
  giveMeRead: string ="red";
  itemImage: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  items: Item[] = [
    new Item(101, 'Pen', 10),
    new Item(102, 'Pencil', 5),
    new Item(103, 'Eraser', 3)
  ];

  getTitle(): string {
    return this.title();
  }
  get Title(): string {
    return this.title();
  }

  max(first: number, second: number): number {
    return Math.max(first, second);
  }

  script: string = '<script type="text/javascript">alert("Hacked!")</script>';
  div: string= '<div style="color: red; font-weight: bold;">This is a red div</div>';

  // item: Item | null=null;
  item: Item | null=new Item(null, 'Marker', 15);

}
