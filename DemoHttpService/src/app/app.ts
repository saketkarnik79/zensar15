import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewPosts } from './view-posts/view-posts';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, ViewPosts],
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoHttpService');
}
