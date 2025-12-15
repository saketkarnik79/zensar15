import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JsonPipe, KeyValuePipe, LowerCasePipe, UpperCasePipe, TitleCasePipe, SlicePipe, CurrencyPipe, DecimalPipe, PercentPipe, DatePipe } from '@angular/common';
import { interval } from 'rxjs';
import { TempConverterPipe } from '../pipes/tempConverter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, TempConverterPipe, KeyValuePipe, JsonPipe, DatePipe, LowerCasePipe, UpperCasePipe, TitleCasePipe, SlicePipe, CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoPipes');

  text1: string = "ANGULAR 21 Learning Session!";
  price: number = 100000.2536;
  n1: number = 0.4567;
  today: Date=new Date();
  person: Object = {id: 1, name: 'James', age: 55};
  mapKV: Map<string, string>=new Map<string,string>(
    [
      ['framework', 'Angular 21'],
      ['platform', '.NET'],
      ['os', 'Windows'],
      ['version', '21'],
    ]
  )
  tick$ = interval(1000);
  celcius: number=0;
  farenheit:number=0;
}
