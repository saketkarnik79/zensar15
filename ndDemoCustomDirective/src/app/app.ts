import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ttClassDirective } from "../directives/ttClassDirective";
import { ttIfDirective } from '../directives/ttIfDirective';
import { FormsModule } from '@angular/forms';
import { ttTooltipDirective } from '../directives/ttToolTipDirective';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ttClassDirective, ttIfDirective, FormsModule, ttTooltipDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Custom directives in Angular');
  show: boolean = true;
}
